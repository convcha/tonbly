import {
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ja } from "date-fns/locale";
import gql from "graphql-tag";
import React from "react";
import { Link } from "../components/Link";
import { formatDistance, parseISO } from "date-fns";
import { useGetNewArticlesQuery } from "../generated/graphql";

gql`
  query GetNewArticles {
    article(order_by: { created_at: desc }) {
      id
      title
      content
      author_user_id
      created_at
      author {
        name
      }
    }
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      [theme.breakpoints.up("md")]: {
        paddingLeft: "190px",
        paddingRight: "190px"
      }
    },
    list: {
      backgroundColor: theme.palette.background.paper
    },
    avatar: {
      marginRight: theme.spacing(1)
    }
  })
);

export function Home() {
  const classes = useStyles();
  const { loading, error, data } = useGetNewArticlesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const now = new Date();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          新着記事
        </Typography>
        <List
          // component="nav"
          className={classes.list}
        >
          <Divider />
          {data?.article.map(article => (
            <div key={article.id}>
              <ListItem dense>
                <Link
                  to={`/articles/${article.id}`}
                  key={article.id}
                  color="inherit"
                >
                  <Avatar src={"avatar.jpg"} className={classes.avatar} />
                </Link>
                <ListItemText
                  primary={
                    <Link
                      to={`/articles/${article.id}`}
                      key={article.id}
                      color="inherit"
                    >
                      {article.title}
                    </Link>
                  }
                  primaryTypographyProps={{ variant: "subtitle1" }}
                  secondary={
                    <>
                      <Link
                        to={`/articles/${article.id}`}
                        key={article.id}
                        color="inherit"
                      >
                        {article.author.name}
                      </Link>
                      <span style={{ marginLeft: "10px" }}>
                        {formatDistance(parseISO(article.created_at), now, {
                          locale: ja,
                          includeSeconds: true
                        })}
                        前
                      </span>
                    </>
                  }
                />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Box>
    </Container>
  );
}
