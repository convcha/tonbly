import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import gql from "graphql-tag";
import { ArticleList } from "../components/ArticleList";
import { useGetNewArticlesQuery } from "../generated/graphql";

gql`
  query GetNewArticles {
    article(order_by: { created_at: desc }) {
      ...ArticleList
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
  if (!data) return <p>Data not found :(</p>;

  return (
    <Container maxWidth="md" className={classes.container}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          新着記事
        </Typography>
        <ArticleList articles={data.article} />
      </Box>
    </Container>
  );
}
