import { useMutation } from "@apollo/react-hooks";
import { Button } from "@material-ui/core";
import gql from "graphql-tag";
import React, { useEffect, useRef, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { ArticleEditor, EditingArticle } from "../components/ArticleEditor";

const ADD_ARTICLE = gql`
  mutation AddArticle(
    $title: String!
    $content: String!
    $tags: [article_tag_insert_input!]!
  ) {
    insert_article(
      objects: {
        title: $title
        content: $content
        article_tags: { data: $tags }
      }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      margin: "5px"
    },
    editorHeader: {
      display: "flex",
      flexDirection: "column"
    },
    editorBody: {
      flex: 1,
      marginTop: "5px"
    },
    editorFooter: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "5px",
      "& button": {
        marginLeft: "5px",
        width: "120px"
      }
    }
  })
);

export const ArticleNew = () => {
  const classes = useStyles();
  const history = useHistory();
  const [draft, setDraft] = useState({} as EditingArticle);
  const [addArticle] = useMutation(ADD_ARTICLE);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (titleInputRef && titleInputRef.current) {
      titleInputRef.current.focus();
    }

    if (editorRef?.current) {
      const codeMirror = editorRef?.current?.editorInst?.mdEditor?.cm;
      // FIXME: this setting does not work
      codeMirror.options.tabindex = 1;
    }
  }, []);

  const onDraftChange = (value: EditingArticle) => {
    setDraft(value);
  };

  const onCreateButtonClidk: React.FormEventHandler = async e => {
    e.preventDefault();

    const tagsParam = draft.tags.map(label => ({
      tag: {
        data: { label: label },
        on_conflict: {
          constraint: "tag_label_key",
          update_columns: ["for_ignore_update"]
        }
      }
    }));
    const res = await addArticle({
      variables: { title: draft.title, content: draft.content, tags: tagsParam }
    });
    const id = res.data.insert_article.returning[0].id;
    history.replace(`/articles/${id}`);
  };

  return (
    <form className={classes.container}>
      <ArticleEditor onChange={onDraftChange} />
      <div className={classes.editorFooter}>
        <Button variant="outlined" color="secondary">
          下書き保存
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={onCreateButtonClidk}
        >
          投稿する
        </Button>
      </div>
    </form>
  );
};
