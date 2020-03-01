import { TextField } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Editor } from "./Editor";
import { TagInput } from "./TagInput";

export interface EditingArticle {
  title: string;
  tags: string[];
  content: string;
}

interface ArticleEditorProps {
  defaultValue?: EditingArticle;
  onChange?: (value: EditingArticle) => void;
}

export const ArticleEditor = (props: ArticleEditorProps) => {
  const { defaultValue, onChange } = props;
  const [title, setTitle] = useState(defaultValue?.title ?? "");
  const [tags, setTags] = useState(defaultValue?.tags ?? []);
  const [content, setContent] = useState(defaultValue?.content ?? "");
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

  const update = (newValue: EditingArticle) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTitle(newValue);
    update({
      title: newValue,
      tags,
      content
    });
  };

  const onTagChange = (tags: string[]) => {
    setTags(tags);
    update({
      title,
      tags,
      content
    });
  };

  const onContentChange = () => {
    const newValue = editorRef.current.editorInst.getMarkdown();
    setContent(newValue);
    update({
      title,
      tags,
      content: newValue
    });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          placeholder="タイトル"
          inputRef={titleInputRef}
          value={title}
          onChange={onTitleChange}
        />
        <TagInput
          allowDuplicates={false}
          onValueChange={onTagChange}
          defaultValue={tags}
          style={{ marginTop: "5px" }}
        />
      </div>
      <div style={{ flex: 1, marginTop: "5px" }}>
        <Editor
          ref={editorRef}
          onChange={onContentChange}
          previewStyle="vertical"
          height="100%"
          initialValue={content}
          placeholder="本文"
        />
      </div>
    </>
  );
};
