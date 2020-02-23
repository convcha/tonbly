import React from "react";
import { Box, Container } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      [theme.breakpoints.up("md")]: {
        paddingLeft: "190px",
        paddingRight: "190px"
      }
    }
  })
);

export const ListPageLayout: React.FC = props => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Box my={4}>{children}</Box>
    </Container>
  );
};
