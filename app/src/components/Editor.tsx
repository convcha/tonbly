import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import {
  Editor as TuiEditor,
  Viewer as TuiViewer,
  ViewerProps,
} from "@toast-ui/react-editor";
import "codemirror/lib/codemirror.css";
import "highlight.js/styles/gml.css";
import React from "react";

// FIXME: Use EditorProps instead of any
export const Editor = React.forwardRef<any, any>((props, ref) => (
  <TuiEditor ref={ref} usageStatistics={false} {...props} />
));

export const Viewer = React.forwardRef<any, ViewerProps>((props, ref) => (
  <TuiViewer ref={ref} {...props} />
));
