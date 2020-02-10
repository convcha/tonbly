import { TypographyTypeMap } from "@material-ui/core/Typography/Typography";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

type LogoProps = {
  variant: TypographyTypeMap["props"]["variant"];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // marginRight: 30,
      // flexGrow: 1,
      display: "none",
      fontFamily: "Patua One, cursive",
      // color: "#19857b",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    }
  })
);

export const Logo = (props: LogoProps) => {
  const { variant } = props;
  const classes = useStyles();

  return (
    <Typography
      className={classes.root}
      variant={variant}
      color="secondary"
      noWrap
    >
      Tonbly
    </Typography>
  );
};
