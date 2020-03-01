import { Divider, List, ListItem, ListItemText } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ChatBubbleOutline, LocalOfferOutlined } from "@material-ui/icons";
import { formatDistance, parseISO } from "date-fns";
import { ja } from "date-fns/locale";
import gql from "graphql-tag";
import React from "react";
import { ArticleListFragment } from "../generated/graphql";
import { maxItemsPerPage } from "../utils/constants";
import { Avatar } from "./Avatar";
import { Link } from "./Link";
import { PaginationLink } from "./PaginationLink";

interface ArticleListProps {
  articles: ArticleListFragment[];
  totalCount: number;
}

gql`
  fragment ArticleList on article {
    id
    title
    content
    author_user_id
    created_at
    author {
      username
      name
      profile_image_url
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

export const ArticleList = (props: ArticleListProps) => {
  const { articles, totalCount } = props;
  const classes = useStyles();
  const now = new Date();

  const totalNumberOfPages = Math.ceil(totalCount / maxItemsPerPage);

  return (
    <div
      className={classes.container}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <List>
        <Divider />
        {articles.map(article => (
          <div key={article.id}>
            <ListItem style={{ display: "flex", alignItems: "flex-start" }}>
              <Avatar
                className={{ root: classes.avatar }}
                style={{ root: { marginTop: "6px" } }}
                username={article.author.username}
                profileImageUrl={article.author.profile_image_url}
              />
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
                          to={`/tags/${encodeURIComponent(tag.tag.label)}`}
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
      {totalNumberOfPages > 1 && (
        <div style={{ marginTop: "30px" }}>
          <PaginationLink totalNumberOfPages={totalNumberOfPages} />
        </div>
      )}
    </div>
  );
};
