import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import gql from "graphql-tag";
import { ArticleList } from "../components/ArticleList";
import { ListPageLayout } from "../components/ListPageLayout";
import { useGetArticlesWrittenByUserQuery } from "../generated/graphql";
import { maxItemsPerPage } from "../utils/constants";
import { useQuery } from "../utils/util";

gql`
  query GetArticlesWrittenByUser(
    $limit: Int!
    $offset: Int!
    $username: String!
  ) {
    article_aggregate(where: { author: { username: { _eq: $username } } }) {
      aggregate {
        count(columns: [id])
      }
    }
    article(
      where: { author: { username: { _eq: $username } } }
      limit: $limit
      offset: $offset
      order_by: { created_at: desc }
    ) {
      ...ArticleList
    }
  }
`;

export function UserProfile() {
  const query = useQuery();
  const page = parseInt(query.get("page") ?? "1", 10);
  const params = useParams<{ username: string }>();
  const username = decodeURIComponent(params.username);

  const { loading, error, data } = useGetArticlesWrittenByUserQuery({
    variables: {
      username,
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
        {username} が投稿した記事
      </Typography>
      <ArticleList
        articles={data.article}
        totalCount={data?.article_aggregate?.aggregate?.count ?? 0}
      />
    </ListPageLayout>
  );
}
