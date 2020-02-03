import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ADD_ARTICLE = gql`
  mutation AddArticle($title: String!, $content: String!) {
    insert_article(objects: { title: $title, content: $content }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const ArticleNew = () => {
  const history = useHistory();
  const [addArticle] = useMutation(ADD_ARTICLE);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (value: string) => {
    setTitle(value);
  };
  const onContentChange = (value: string) => {
    setContent(value);
  };
  const onCreateButtonClidk: React.FormEventHandler = async e => {
    e.preventDefault();

    if (window.confirm("Are you sure?")) {
      const res = await addArticle({ variables: { title, content } });
      console.log({ res });
      alert("Done!");
      const id = res.data.insert_article.returning[0].id;
      history.replace(`/articles/${id}/edit`);
    }
  };

  return (
    <>
      <h1>New Article</h1>
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
          <input type="submit" value="Create" onClick={onCreateButtonClidk} />
        </div>
      </form>
    </>
  );
};
