import { Button, TextField } from "@material-ui/core";
import React from "react";
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

  return (
    <div className={classes.container}>
      <div className={classes.editorHeader}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          placeholder="タイトル"
        />
        <TagInput allowDuplicates={false} style={{ marginTop: "5px" }} />
      </div>
      <div className={classes.editorBody}>
        <Editor
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
