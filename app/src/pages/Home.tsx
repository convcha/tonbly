import React from "react";
import { Typography } from "@material-ui/core";
import gql from "graphql-tag";
import { ArticleList } from "../components/ArticleList";
import { ListPageLayout } from "../components/ListPageLayout";
import { useGetNewArticlesQuery } from "../generated/graphql";
import { maxItemsPerPage } from "../utils/constants";
import { useQuery } from "../utils/util";

gql`
  query GetNewArticles($limit: Int!, $offset: Int!) {
    article_aggregate {
      aggregate {
        count(columns: [id])
      }
    }
    article(limit: $limit, offset: $offset, order_by: { created_at: desc }) {
      ...ArticleList
    }
  }
`;

export function Home() {
  const query = useQuery();
  const page = parseInt(query.get("page") ?? "1", 10);
  const { loading, error, data } = useGetNewArticlesQuery({
    variables: {
      limit: maxItemsPerPage,
      offset: maxItemsPerPage * (page - 1)
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>Data not found :(</p>;

  return (
    <ListPageLayout>
      <Typography variant="h4" component="h1" gutterBottom>
        新着記事
      </Typography>
      <ArticleList
        articles={data.article}
        totalCount={data?.article_aggregate?.aggregate?.count ?? 0}
      />
    </ListPageLayout>
  );
}
