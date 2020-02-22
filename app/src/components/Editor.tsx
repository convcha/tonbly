import React from "react";
import {
  Editor as TuiEditor,
  Viewer as TuiViewer
} from "@toast-ui/react-editor";
import "codemirror/lib/codemirror.css";
import "tui-editor/dist/tui-editor.min.css";
import "tui-editor/dist/tui-editor-contents.min.css";
import "highlight.js/styles/gml.css";
import "tui-editor/dist/tui-editor-extScrollSync";
import "tui-editor/dist/tui-editor-extColorSyntax";
import "tui-editor/dist/tui-editor-extUML";
import "tui-editor/dist/tui-editor-extChart";
import "tui-editor/dist/tui-editor-extTable";

interface Hooks {
  previewBeforeHook: (...args: any[]) => void;
  addImageBlobHook: (
    fileOrBlob: File | Blob,
    callback: (...args: any[]) => void,
    source: string
  ) => void;
}

interface ToMarkOptions {
  gfm?: boolean;
  renderer?: any;
}

interface Converter {
  getMarkdownitHighlightRenderer(): markdownit;
  initHtmlSanitizer(): void;
  toHTML(makrdown: string): string;
  toHTMLWithCodeHightlight(markdown: string): string;
  toMarkdown(html: string, toMarkdownOptions: ToMarkOptions): string;
}

interface EditorProps {
  height?: string;
  minHeight?: string;
  initialValue?: string;
  previewStyle?: "tab" | "vertical";
  initialEditType?: "markdown" | "wysiwyg";
  onLoad?: (...args: any[]) => void;
  onChange?: (...args: any[]) => void;
  onStateChange?: (...args: any[]) => void;
  onFocus?: (...args: any[]) => void;
  onBlur?: (...args: any[]) => void;
  hooks?: Array<Hooks>;
  language?: string;
  useCommandShortcut?: boolean;
  useDefaultHTMLSanitizer?: boolean;
  codeBlockLanguages?: Array<string>;
  usageStatistics?: boolean;
  toolbarItems?: string;
  hideModeSwitch?: boolean;
  exts?: Array<any>;
  customConvertor?: Converter;
  placeholder?: string;
  previewDelayTime?: string;
  linkAttribute?: any;
}

interface ViewerProps {
  initialValue?: string;
  onLoad?: (...args: any[]) => void;
  onChange?: (...args: any[]) => void;
  onStateChange?: (...args: any[]) => void;
  onFocus?: (...args: any[]) => void;
  onBlur?: (...args: any[]) => void;
  hooks?: Array<Hooks>;
  exts?: Array<any>;
}

export const Editor = React.forwardRef<any, EditorProps>((props, ref) => (
  <TuiEditor
    ref={ref}
    usageStatistics={false}
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
    {...props}
  />
));

export const Viewer = React.forwardRef<any, ViewerProps>((props, ref) => (
  <TuiViewer
    ref={ref}
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
    {...props}
  />
));
