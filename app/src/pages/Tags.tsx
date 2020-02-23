import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import gql from "graphql-tag";
import { ArticleList } from "../components/ArticleList";
import { ListPageLayout } from "../components/ListPageLayout";
import { useGetTagArticlesQuery } from "../generated/graphql";

gql`
  query GetTagArticles($label: String!) {
    article(
      where: { article_tags: { tag: { label: { _eq: $label } } } }
      order_by: { created_at: desc }
    ) {
      ...ArticleList
    }
  }
`;

export function Tags() {
  const params = useParams<{ label: string }>();
  const label = decodeURIComponent(params.label);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [label]);

  const { loading, error, data } = useGetTagArticlesQuery({
    variables: { label }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>Data not found :(</p>;

  return (
    <ListPageLayout>
      <Typography variant="h4" component="h1" gutterBottom>
        {label} に関する記事
      </Typography>
      <ArticleList articles={data.article} />
    </ListPageLayout>
  );
}
