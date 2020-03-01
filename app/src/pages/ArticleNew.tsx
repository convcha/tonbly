import { Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import gql from "graphql-tag";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { ArticleEditor } from "../components";
import { EditingArticle } from "../components/ArticleEditor";
import {
  Article_Tag_Insert_Input,
  Tag_Constraint,
  Tag_Update_Column,
  useAddArticleMutation
} from "../generated/graphql";

gql`
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
  const [addArticle] = useAddArticleMutation();
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
    const tagsParam: Array<Article_Tag_Insert_Input> = draft.tags.map(
      label => ({
        tag: {
          data: { label: label },
          on_conflict: {
            constraint: Tag_Constraint.TagLabelKey,
            update_columns: [Tag_Update_Column.ForIgnoreUpdate]
          }
        }
      })
    );
    const res = await addArticle({
      variables: { title: draft.title, content: draft.content, tags: tagsParam }
    });
    const id = res.data?.insert_article?.returning[0].id;
    if (id === undefined) {
      throw new Error("returning id is undefined");
    }
    history.replace(`/articles/${id}`);
  };

  return (
    <form
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        margin: "5px"
      }}
    >
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
