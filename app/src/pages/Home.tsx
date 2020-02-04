import { useQuery } from "@apollo/react-hooks";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import gql from "graphql-tag";
import React from "react";
import { logs } from "../data";

interface Author {
  name: string;
}

interface Article {
  id: number;
  title: string;
  content: string;
  author_user_id: number;
  author: Author;
}

interface ArticleData {
  article: Article[];
}

const GET_ARTICLES = gql`
  query GetArticles {
    article(order_by: { id: asc }) {
      id
      title
      content
      author_user_id
      author {
        name
      }
    }
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      marginRight: theme.spacing(1)
    }
  })
);

export function Home() {
  const classes = useStyles();
  const { loading, error, data } = useQuery<ArticleData>(GET_ARTICLES);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          新着記事
        </Typography>
        <List
          component="nav"
          // className={classes.root}
          aria-label="mailbox folders"
        >
          <Divider />
          {logs.map(log => (
            <Link
              to="/articles/1"
              key={log.primaryText}
              color="inherit"
              component={RouterLink}
            >
              <div>
                <ListItem dense button>
                  <Avatar src={log.avatarUrl} className={classes.avatar} />
                  <ListItemText
                    primary={log.primaryText}
                    secondary={log.secondaryText}
                  />
                </ListItem>
                <Divider />
              </div>
            </Link>
          ))}
        </List>
      </Box>
    </Container>
  );
}
