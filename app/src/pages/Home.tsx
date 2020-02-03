import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { Link } from "react-router-dom";

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

export function Home() {
  const { loading, error, data } = useQuery<ArticleData>(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h3>Home</h3>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data?.article.map(article => (
            <tr key={article.id}>
              <td>{article.author.name}</td>
              <td>
                <Link to={`/articles/${article.id}`}>{article.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
