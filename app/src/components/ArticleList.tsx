import React from "react";
import gql from "graphql-tag";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { ChatBubbleOutline, LocalOfferOutlined } from "@material-ui/icons";
import { formatDistance, parseISO } from "date-fns";
import { ja } from "date-fns/locale";
import { ArticleListFragment } from "../generated/graphql";
import { Link } from "./Link";

interface ArticleListProps {
  articles: ArticleListFragment[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.background.paper
    },
    avatar: {
      marginRight: theme.spacing(1)
    }
  })
);

gql`
  fragment ArticleList on article {
    id
    title
    content
    author_user_id
    created_at
    author {
      name
    }
    article_tags {
      tag {
        id
        label
      }
    }
    comments_aggregate {
      aggregate {
        count(columns: [id])
      }
    }
  }
`;

export const ArticleList = (props: ArticleListProps) => {
  const { articles } = props;
  const classes = useStyles();
  const now = new Date();

  return (
    <List className={classes.container}>
      <Divider />
      {articles.map(article => (
        <div key={article.id}>
          <ListItem style={{ display: "flex", alignItems: "flex-start" }}>
            <Link
              to={`/articles/${article.id}`}
              key={article.id}
              color="inherit"
              style={{ marginTop: "6px" }}
            >
              <Avatar src={"avatar.jpg"} className={classes.avatar} />
            </Link>
            <ListItemText
              primary={
                <Link
                  to={`/articles/${article.id}`}
                  key={article.id}
                  color="inherit"
                >
                  {article.title}
                </Link>
              }
              primaryTypographyProps={{ variant: "subtitle1" }}
              secondary={
                <>
                  <span
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center"
                    }}
                  >
                    <Link
                      to={`/articles/${article.id}`}
                      key={article.id}
                      color="inherit"
                    >
                      {article.author.name}
                    </Link>
                    <span style={{ marginLeft: "10px" }}>
                      {formatDistance(parseISO(article.created_at), now, {
                        locale: ja,
                        includeSeconds: true
                      })}
                      前
                    </span>
                    <ChatBubbleOutline
                      fontSize="small"
                      style={{
                        width: "14px",
                        height: "14px",
                        marginLeft: "10px"
                      }}
                    />
                    <span style={{ marginLeft: "2px" }}>
                      {article.comments_aggregate.aggregate?.count}
                    </span>
                    <LocalOfferOutlined
                      fontSize="small"
                      style={{
                        width: "14px",
                        height: "14px",
                        marginLeft: "10px"
                      }}
                    />
                    {article.article_tags.map(tag => (
                      <Link
                        key={tag.tag.id}
                        to="/"
                        color="inherit"
                        style={{ marginLeft: "5px" }}
                      >
                        {tag.tag.label}
                      </Link>
                    ))}
                  </span>
                </>
              }
            />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};
