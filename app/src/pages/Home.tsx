import React from "react";
import { Typography } from "@material-ui/core";
import gql from "graphql-tag";
import { ArticleList } from "../components/ArticleList";
import { ListPageLayout } from "../components/ListPageLayout";
import { useGetNewArticlesQuery } from "../generated/graphql";

gql`
  query GetNewArticles {
    article(order_by: { created_at: desc }) {
      ...ArticleList
    }
  }
`;

export function Home() {
  const { loading, error, data } = useGetNewArticlesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>Data not found :(</p>;

  return (
    <ListPageLayout>
      <Typography variant="h4" component="h1" gutterBottom>
        新着記事
      </Typography>
      <ArticleList articles={data.article} />
    </ListPageLayout>
  );
}
