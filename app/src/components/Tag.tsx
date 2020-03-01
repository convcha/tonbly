import { Chip, ChipTypeMap } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { ChipLink, ChipLinkProps } from "./ChipLink";

type TagProps = ChipTypeMap["props"] &
  React.HTMLAttributes<any> & {
    label: string;
  };

type TagLinkProps = ChipLinkProps & {
  label: string;
};

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      borderRadius: "4px"
    }
  })
);

export const Tag = (props: TagProps) => {
  const classes = useStyles();

  return <Chip clickable size="small" className={classes.root} {...props} />;
};

export const TagLink = (props: TagLinkProps) => {
  const { label } = props;
  const classes = useStyles();

  return (
    <ChipLink
      clickable
      size="small"
      className={classes.root}
      to={`/tags/${encodeURIComponent(label)}`}
      {...props}
    />
  );
};
