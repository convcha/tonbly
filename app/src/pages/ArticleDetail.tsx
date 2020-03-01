import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Fab,
  Grid,
  IconButton,
  List,
  Typography
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  DeleteForeverOutlined,
  EditOutlined,
  ThumbUpOutlined
} from "@material-ui/icons";
import gql from "graphql-tag";
import React, { useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Avatar,
  CommentListItem,
  Editor,
  Link,
  Ribbon,
  TagLink,
  useConfirmationDialog,
  Viewer
} from "../components";
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
        username
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
          username
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
    avatar: {
      width: 60,
      height: 60,
      marginRight: "10px"
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
    footer: {
      [theme.breakpoints.up("md")]: {
        paddingLeft: "130px",
        paddingRight: "130px"
      },
      padding: theme.spacing(3, 2),
      marginTop: "auto",
      backgroundColor: "#f6f6f4"
    },
    commentAvatar: {
      width: theme.spacing(4),
      height: theme.spacing(4)
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
            wrap="nowrap"
            style={{ marginBottom: "11px" }}
          >
            <Grid container alignItems="center">
              <Avatar
                username={article.author.username}
                profileImageUrl={article.author.profile_image_url}
                className={{ avatar: classes.avatar }}
              />
              <div>
                <Link to="/" color="inherit">
                  <Typography>{article.author.name}</Typography>
                </Link>
                <Typography variant="caption" style={{ color: "#888888" }}>
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
                <ThumbUpOutlined />
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
          <div style={{ marginBottom: "11px" }}>
            <Ribbon text="連載 | モデリング入門" />
          </div>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            style={{ marginBottom: "20px" }}
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
          <List style={{ width: "100%" }}>
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
          <div style={{ marginTop: "50px", marginBottom: "10px" }}>
            <Grid
              container
              alignItems="center"
              style={{ marginBottom: "10px" }}
            >
              <Avatar
                link={false}
                username={article.author.username}
                className={{ avatar: classes.commentAvatar }}
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
