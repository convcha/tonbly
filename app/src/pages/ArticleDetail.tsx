import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { profileStorage } from "../utils/auth";

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

interface ArticleVars {
  id: number;
}

const GET_ARTICLE = gql`
  query GetArticle($id: Int!) {
    article(where: { id: { _eq: $id } }) {
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

const DELETE_ARTICLE = gql`
  mutation DeleteArticle($id: Int!) {
    delete_article(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export const ArticleDetail = () => {
  const history = useHistory();
  const { id } = useParams();
  const { loading, error, data } = useQuery<ArticleData, ArticleVars>(
    GET_ARTICLE,
    { variables: { id: Number(id) } }
  );
  const [deleteArticle] = useMutation(DELETE_ARTICLE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (error || !data || !data.article[0]) return <p>Data not found :(</p>;

  const article = data.article[0];
  const profile = profileStorage.get();
  const onEditButtonClick = () => {
    history.push(`/articles/${id}/edit`);
  };
  const onDeleteButtonClick = async () => {
    if (window.confirm("Are you sure?")) {
      const res = await deleteArticle({ variables: { id } });
      console.log({ res });
      alert("Done!");
      history.replace("/");
    }
  };

  return (
    <>
      {profile?.id === article.author_user_id && (
        <>
          <button onClick={onEditButtonClick}>Edit</button>
          <button onClick={onDeleteButtonClick}>Delete</button>
        </>
      )}
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </>
  );
};
