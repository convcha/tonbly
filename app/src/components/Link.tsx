import { Link as MuiLink } from "@material-ui/core";
import { LinkTypeMap } from "@material-ui/core/Link/Link";
import React from "react";
import {
  Link as RouterLink,
  LinkProps as MuiLinkProps,
} from "react-router-dom";

// type LinkProps = LinkTypeMap["props"] &
//   MuiLinkProps & {
//     style?: React.CSSProperties;
//   };

// FIXME: Do not use any
export const Link = React.forwardRef<any, any>(
  (props: LinkTypeMap["props"] & MuiLinkProps, ref) => (
    <MuiLink ref={ref} component={RouterLink} {...props} />
  )
);
