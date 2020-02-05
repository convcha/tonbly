import React from "react";
import { Chip as MuiChip, ChipTypeMap } from "@material-ui/core";
import { Link as RouterLink, LinkProps } from "react-router-dom";

export const Chip = (props: ChipTypeMap["props"] & LinkProps) => (
  <MuiChip component={RouterLink} {...props} />
);
