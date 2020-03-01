import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Pagination, PaginationItem } from "@material-ui/lab";
import React from "react";
import { Link, Route } from "react-router-dom";

type PaginationLinkProps = {
  totalNumberOfPages: number;
};

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    ul: {
      justifyContent: "center"
    }
  })
);

export const PaginationLink = (props: PaginationLinkProps) => {
  const { totalNumberOfPages } = props;
  const classes = useStyles();

  return (
    <Route>
      {({ location }) => {
        const query = new URLSearchParams(location.search);
        const page = parseInt(query.get("page") ?? "1", 10);

        return (
          <Pagination
            page={page}
            count={totalNumberOfPages}
            showFirstButton
            showLastButton
            classes={{ ul: classes.ul }}
            renderItem={(item: any) => (
              <PaginationItem
                component={Link}
                to={`${location.pathname}${
                  item.page === 1 ? "" : `?page=${item.page}`
                }`}
                {...item}
              />
            )}
          />
        );
      }}
    </Route>
  );
};
