import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useState } from "react";
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

const UPDATE_ARTICLE = gql`
  mutation UpdateArticle($id: Int!, $title: String!, $content: String!) {
    update_article(
      where: { id: { _eq: $id } }
      _set: { title: $title, content: $content }
    ) {
      affected_rows
    }
  }
`;

export const ArticleEdit = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<ArticleData, ArticleVars>(
    GET_ARTICLE,
    { variables: { id: Number(id) } }
  );

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error :(</p>;

  const article = data.article[0];
  const profile = profileStorage.get();
  if (profile?.id !== article.author_user_id)
    return <p>You cannot edit this article!</p>;

  return (
    <>
      <h1>Edit Article</h1>
      <Form {...article} />
    </>
  );
};

const Form = (props: Article) => {
  const { id, title: oldTitle, content: oldContent } = props;
  const history = useHistory();
  const [updateArticle] = useMutation(UPDATE_ARTICLE);
  const [title, setTitle] = useState(oldTitle);
  const [content, setContent] = useState(oldContent);

  const onTitleChange = (value: string) => {
    setTitle(value);
  };
  const onContentChange = (value: string) => {
    setContent(value);
  };
  const onUpdateButtonClidk: React.FormEventHandler = async e => {
    e.preventDefault();

    if (window.confirm("Are you sure?")) {
      const res = await updateArticle({ variables: { id, title, content } });
      console.log({ res });
      alert("Done!");
      history.replace(`/articles/${id}/edit`);
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
      </div>
      <div>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => onTitleChange(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
      </div>
      <div>
        <textarea
          id="content"
          cols={30}
          rows={10}
          value={content}
          onChange={e => onContentChange(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="Update" onClick={onUpdateButtonClidk} />
      </div>
    </form>
  );
};
