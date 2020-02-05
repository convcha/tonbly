import { Grid } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown";
import { Link } from "../components/Link";
import { articles } from "../data";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    author: {
      marginBottom: "20px"
    },
    avatar: {
      width: 60,
      height: 60,
      marginRight: "10px"
    },
    timestamp: {
      color: "#888888"
    },
    likeButton: {
      width: "60px",
      height: "60px",
      borderRadius: "50%"
    },
    title: {
      marginBottom: "20px"
    },
    tags: {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5)
      },
      marginBottom: "50px"
    },
    tag: {
      borderRadius: "4px"
    }
  })
);

export default function Article() {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(999);

  const handleLikeClick = (e: any) => {
    e.preventDefault();
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.author}
          wrap="nowrap"
        >
          <Grid container alignItems="center">
            <Link to="/" underline="none" color="inherit">
              <Avatar
                alt="devilune"
                src="/avatar.jpg"
                className={classes.avatar}
              />
            </Link>
            <div>
              <Typography>山田太郎</Typography>
              <Typography variant="caption" className={classes.timestamp}>
                2019年11月11日 16:07に公開
              </Typography>
            </div>
          </Grid>
          <Badge
            badgeContent={likes}
            color="primary"
            overlap="circle"
            max={999}
          >
            <Fab
              size="medium"
              color={liked ? "secondary" : "default"}
              onClick={handleLikeClick}
            >
              <ThumbUpOutlinedIcon />
            </Fab>
          </Badge>{" "}
        </Grid>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className={classes.title}
        >
          {articles.shiwasu.title}
        </Typography>
        <div className={classes.tags}>
          <Chip
            size="small"
            label="JavaScript"
            component="a"
            href="/"
            clickable
            className={classes.tag}
          />
          <Chip
            size="small"
            label="初心者"
            component="a"
            href="/"
            clickable
            className={classes.tag}
          />
          <Chip
            size="small"
            label="Vue.js"
            component="a"
            href="/"
            clickable
            className={classes.tag}
          />
          <Chip
            size="small"
            label="コンポーネント"
            component="a"
            href="/"
            clickable
            className={classes.tag}
          />
          <Chip
            size="small"
            label="Vuex"
            component="a"
            href="/"
            clickable
            className={classes.tag}
          />
        </div>
        <ReactMarkdown source={articles.shiwasu.content} />
      </Box>
    </Container>
  );
}
