import React from "react";
import { Link as MuiLink } from "@material-ui/core";
import { LinkTypeMap } from "@material-ui/core/Link/Link";
import { Link as RouterLink, LinkProps } from "react-router-dom";

export const Link = React.forwardRef<any, any>(
  (props: LinkTypeMap["props"] & LinkProps, ref) => (
    <MuiLink ref={ref} component={RouterLink} {...props} />
  )
);
