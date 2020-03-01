import { Chip as MuiChip, ChipTypeMap } from "@material-ui/core";
import React from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";

export type ChipLinkProps = Omit<LinkProps, "to"> & {
  to?: LinkProps["to"];
} & ChipTypeMap["props"];

export const ChipLink = (props: ChipLinkProps) => (
  <MuiChip component={RouterLink} {...props} />
);
