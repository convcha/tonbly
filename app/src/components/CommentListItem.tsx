import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import gql from "graphql-tag";
import React, { useRef, useState } from "react";
import {
  Button,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { DeleteForeverOutlined, EditOutlined } from "@material-ui/icons";
import {
  GetArticleDetailDocument,
  useDeleteCommentMutation,
  useUpdateCommentMutation
} from "../generated/graphql";
import { profileStorage } from "../utils/auth";
import { formatISODateStringToYYYYMMDDHHMM } from "../utils/util";
import { useConfirmationDialog } from "./Dialog";
import { Editor, Viewer } from "./Editor";
import { Link } from "./Link";

interface CommentListItemProps {
  id: number;
  articleId: number;
  userId: number;
  username: string;
  text: string;
  created_at: string;
}

gql`
  mutation UpdateComment($id: Int!, $text: String!) {
    update_comment(where: { id: { _eq: $id } }, _set: { text: $text }) {
      affected_rows
    }
  }
`;

gql`
  mutation DeleteComment($id: Int!) {
    delete_comment(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    editorFooter: {
      "& > button": {
        marginLeft: "5px"
      }
    }
  })
);

export const CommentListItem = (props: CommentListItemProps) => {
  const { id, articleId, userId, username, text, created_at } = props;

  const [
    DeleteConfirmationDialog,
    openDeleteConfirmationDialog,
    closeDeleteConfirmationDialog
  ] = useConfirmationDialog("コメントを削除しますか?", "削除する", () => {
    closeDeleteConfirmationDialog();
    deleteComment({ variables: { id } });
  });
  // FIXME: This is not the responsibility of this component
  const refetchQueries = [
    {
      query: GetArticleDetailDocument,
      variables: { id: articleId }
    }
  ];
  const [updateComment] = useUpdateCommentMutation({
    refetchQueries
  });
  const [deleteComment] = useDeleteCommentMutation({
    refetchQueries
  });
  const commentEditorRef = useRef<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const classes = useStyles();

  const profile = profileStorage.get();
  const isOwnComment: boolean = profile?.id === userId;

  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  const onDeleteButtonClick = () => {
    openDeleteConfirmationDialog();
  };

  const onCancelButtonClick = () => {
    setIsEditing(false);
  };

  const onUpdateButtonClick = async () => {
    const commentEditor = commentEditorRef.current.editorInst;
    const text = commentEditor.getMarkdown();
    await updateComment({ variables: { id, text } });
    setIsEditing(false);
  };

  return (
    <>
      {DeleteConfirmationDialog()}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Link to="/">
            <Avatar alt={username} src="/avatar.jpg" />
          </Link>
        </ListItemAvatar>
        {isEditing ? (
          <div>
            <Editor
              ref={commentEditorRef}
              initialValue={text}
              height="250px"
              placeholder="コメントを入力してください"
            />
            <div
              className={classes.editorFooter}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px"
              }}
            >
              <Button
                variant="outlined"
                color="default"
                onClick={onCancelButtonClick}
              >
                キャンセル
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={onUpdateButtonClick}
              >
                更新する
              </Button>
            </div>
          </div>
        ) : (
          <ListItemText
            disableTypography={true}
            primary={
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <Link to="/">
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                    style={{ display: "inline" }}
                  >
                    {username}
                  </Typography>
                </Link>
                {isOwnComment && (
                  <div>
                    <IconButton
                      size="small"
                      onClick={onEditButtonClick}
                      style={{
                        marginLeft: "10px",
                        width: "17px",
                        height: "17px"
                      }}
                    >
                      <EditOutlined
                        style={{
                          width: "17px",
                          height: "17px"
                        }}
                      />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={onDeleteButtonClick}
                      style={{
                        marginLeft: "10px",
                        width: "17px",
                        height: "17px"
                      }}
                    >
                      <DeleteForeverOutlined
                        style={{
                          width: "17px",
                          height: "17px"
                        }}
                      />
                    </IconButton>
                  </div>
                )}
              </Box>
            }
            secondary={
              <div>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{
                    marginBottom: "10px",
                    fontSize: "0.75rem"
                  }}
                >
                  <Link to="/" color="inherit">
                    {formatISODateStringToYYYYMMDDHHMM(created_at)}
                  </Link>
                </Typography>
                <Viewer initialValue={text} />
              </div>
            }
          />
        )}
      </ListItem>
      <Divider />
    </>
  );
};
