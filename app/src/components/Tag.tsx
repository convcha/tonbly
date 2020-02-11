import React from "react";
import { Chip, ChipTypeMap } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ChipLink, ChipLinkProps } from "./ChipLink";

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      borderRadius: "4px"
    }
  })
);

export const Tag = (
  props: ChipTypeMap["props"] & React.HTMLAttributes<any>
) => {
  const classes = useStyles();

  return <Chip clickable size="small" className={classes.root} {...props} />;
};

export const TagLink = (props: ChipLinkProps) => {
  const classes = useStyles();

  return (
    <ChipLink clickable size="small" className={classes.root} {...props} />
  );
};
