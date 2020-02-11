import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Editor } from "@toast-ui/react-editor";
import { TagInput } from "../components/TagInput";

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

export const ArticleNewMock = () => {
  const classes = useStyles();
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

  return (
    <div className={classes.container}>
      <div className={classes.editorHeader}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          placeholder="タイトル"
          inputRef={titleInputRef}
        />
        <TagInput allowDuplicates={false} style={{ marginTop: "5px" }} />
      </div>
      <div className={classes.editorBody}>
        <Editor
          ref={editorRef}
          usageStatistics={false}
          // language="ja"
          previewStyle="vertical"
          height="100%"
          // width="100%"
          initialEditType="markdown"
          placeholder="本文"
          useCommandShortcut={true}
          exts={[
            {
              name: "chart",
              minWidth: 100,
              maxWidth: 600,
              minHeight: 100,
              maxHeight: 300
            },
            "scrollSync",
            "colorSyntax",
            "uml",
            "mark",
            "table"
          ]}
        />
      </div>
      <div className={classes.editorFooter}>
        <Button variant="outlined" color="secondary">
          下書き保存
        </Button>
        <Button variant="contained" color="secondary">
          投稿する
        </Button>
      </div>
    </div>
  );
};
