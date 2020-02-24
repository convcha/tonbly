import { Button, Divider, Grid, IconButton, List } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Fab from "@material-ui/core/Fab";
import { DeleteForeverOutlined, EditOutlined } from "@material-ui/icons";
import gql from "graphql-tag";
import React, { useRef, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useHistory, useParams } from "react-router-dom";
import { CommentListItem } from "../components/CommentListItem";
import { useConfirmationDialog } from "../components/Dialog";
import { Editor, Viewer } from "../components/Editor";
import { Link } from "../components/Link";
import { Ribbon } from "../components/Ribbon";
import { TagLink } from "../components/Tag";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import {
  GetArticleDetailDocument,
  useAddCommentMutation,
  useDeleteArticleMutation,
  useGetArticleDetailQuery
} from "../generated/graphql";
import { profileStorage } from "../utils/auth";
import { formatISODateStringToYYYYMMDD } from "../utils/util";

gql`
  query GetArticleDetail($id: Int!) {
    article(where: { id: { _eq: $id } }) {
      id
      title
      content
      author_user_id
      created_at
      author {
        name
        profile_image_url
      }
      article_tags {
        tag {
          id
          label
        }
      }
      comments(order_by: { created_at: asc }) {
        id
        text
        created_at
        updated_at
        user {
          id
          name
          profile_image_url
        }
      }
    }
  }
`;

gql`
  mutation DeleteArticle($id: Int!) {
    delete_article(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

gql`
  mutation AddComment($article_id: Int!, $text: String!) {
    insert_comment(objects: { article_id: $article_id, text: $text }) {
      affected_rows
      returning {
        id
        text
        created_at
        updated_at
        user {
          id
          name
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      [theme.breakpoints.up("md")]: {
        paddingLeft: "130px",
        paddingRight: "130px"
      }
    },
    grow: {
      flexGrow: 1
    },
    author: {
      marginBottom: "11px"
    },
    serial: {
      marginBottom: "11px"
    },
    avatar: {
      width: 60,
      height: 60,
      marginRight: "10px"
    },
    timestamp: {
      color: "#888888"
    },
    likeButton: {
      width: "60px",
      height: "60px",
      borderRadius: "50%"
    },
    title: {
      marginBottom: "20px"
    },
    tags: {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5)
      },
      marginBottom: "50px"
    },
    tag: {
      borderRadius: "4px"
    },
    footer: {
      [theme.breakpoints.up("md")]: {
        paddingLeft: "130px",
        paddingRight: "130px"
      },
      padding: theme.spacing(3, 2),
      marginTop: "auto",
      backgroundColor: "#f6f6f4"
    },
    commentEditor: {
      marginTop: "50px",
      marginBottom: "10px"
    },
    commentAvatar: {
      width: theme.spacing(4),
      height: theme.spacing(4)
    },
    root: {
      width: "100%"
      // maxWidth: 360,
      // backgroundColor: theme.palette.background.paper
    }
  })
);

export default function ArticleDetail() {
  const [
    DeleteConfirmationDialog,
    openDeleteConfirmationDialog,
    closeDeleteConfirmationDialog
  ] = useConfirmationDialog("記事を削除しますか?", "削除する", async () => {
    closeDeleteConfirmationDialog();
    await deleteArticle({ variables: { id } });
    history.replace("/");
  });
  const classes = useStyles();
  const history = useHistory();
  const id = Number(useParams<{ id: string }>().id);
  const commentEditorRef = useRef<any>(null);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(999);
  const { loading, error, data } = useGetArticleDetailQuery({
    variables: { id }
  });
  const [deleteArticle] = useDeleteArticleMutation();
  const [addComment] = useAddCommentMutation({
    refetchQueries: [
      {
        query: GetArticleDetailDocument,
        variables: { id }
      }
    ]
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (error || !data || !data.article[0]) return <p>Data not found :(</p>;

  const article = data.article[0];
  const profile = profileStorage.get();
  const isOwnArticle: boolean = profile?.id === article.author_user_id;

  const onEditButtonClick = () => {
    history.push(`/articles/${id}/edit`);
  };

  const onDeleteButtonClick = async () => {
    openDeleteConfirmationDialog();
  };

  const onPostCommentButtonClick = async () => {
    const commentEditor = commentEditorRef.current.editorInst;
    const comment = commentEditor.getMarkdown();
    await addComment({
      variables: { article_id: article.id, text: comment }
    });
    commentEditor.setMarkdown("");
  };

  const handleLikeClick = (e: any) => {
    e.preventDefault();
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <>
      {DeleteConfirmationDialog()}
      <Container maxWidth="md" className={classes.container}>
        <Box my={4}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.author}
            wrap="nowrap"
          >
            <Grid container alignItems="center">
              <Link to="/" underline="none" color="inherit">
                <Avatar
                  alt="devilune"
                  src={article.author.profile_image_url ?? ""}
                  className={classes.avatar}
                />
              </Link>
              <div>
                <Link to="/" color="inherit">
                  <Typography>{article.author.name}</Typography>
                </Link>
                <Typography variant="caption" className={classes.timestamp}>
                  {formatISODateStringToYYYYMMDD(article.created_at)}
                  に公開
                </Typography>
              </div>
            </Grid>
            <Badge
              badgeContent={likes}
              color="primary"
              overlap="circle"
              max={999}
            >
              <Fab
                size="medium"
                color={liked ? "secondary" : "default"}
                onClick={handleLikeClick}
              >
                <ThumbUpOutlinedIcon />
              </Fab>
            </Badge>
            {isOwnArticle && (
              <>
                <IconButton
                  size="small"
                  onClick={onEditButtonClick}
                  style={{ marginLeft: "5px" }}
                >
                  <EditOutlined />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={onDeleteButtonClick}
                  style={{ marginLeft: "5px" }}
                >
                  <DeleteForeverOutlined />
                </IconButton>
              </>
            )}
          </Grid>
          <div className={classes.serial}>
            <Ribbon text="連載 | モデリング入門" />
          </div>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className={classes.title}
          >
            {article.title}
          </Typography>
          <div className={classes.tags}>
            {article.article_tags.map(tag => (
              <TagLink key={tag.tag.label} label={tag.tag.label} />
            ))}
          </div>
          <Viewer initialValue={article.content} />
        </Box>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="md" className={classes.container}>
          {/*<QuestionAnswer />*/}
          <Typography component="span" variant="h6" color="textPrimary">
            コメント
          </Typography>
          <Divider />
          <List className={classes.root}>
            {article.comments.map(comment => (
              <CommentListItem
                key={comment.id}
                id={comment.id}
                articleId={Number(id)}
                userId={comment.user.id}
                username={comment.user.name}
                profileImageUrl={comment.user.profile_image_url ?? ""}
                text={comment.text}
                created_at={comment.created_at}
              />
            ))}
          </List>
          <div className={classes.commentEditor}>
            <Grid
              container
              alignItems="center"
              style={{ marginBottom: "10px" }}
            >
              <Avatar
                alt="devilune"
                src="/avatar.jpg"
                className={classes.commentAvatar}
              />
              <Typography style={{ marginLeft: "10px" }}>
                コメントを投稿する
              </Typography>
            </Grid>
            <Editor
              ref={commentEditorRef}
              height="250px"
              placeholder="コメントを入力してください"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={onPostCommentButtonClick}
            >
              投稿する
            </Button>
          </div>
        </Container>
      </footer>
    </>
  );
}
