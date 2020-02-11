import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Fab from "@material-ui/core/Fab";
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "../components/Link";
import { Ribbon } from "../components/Ribbon";
import { TagLink } from "../components/Tag";
import { articles } from "../data";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import "codemirror/lib/codemirror.css";
import "tui-editor/dist/tui-editor.min.css";
import "tui-editor/dist/tui-editor-contents.min.css";
import "highlight.js/styles/gml.css";
import "tui-editor/dist/tui-editor-extScrollSync";
import "tui-editor/dist/tui-editor-extColorSyntax";
import "tui-editor/dist/tui-editor-extUML";
import "tui-editor/dist/tui-editor-extChart";
import "tui-editor/dist/tui-editor-extTable";
import { Editor, Viewer } from "@toast-ui/react-editor";

// const content = [
//   "![image](https://cloud.githubusercontent.com/assets/389021/16107646/9729e556-33d8-11e6-933f-5b09fa3a53bb.png)",
//   "# Heading 1",
//   "## Heading 2",
//   "### Heading 3",
//   "#### Heading 4",
//   "##### Heading 5",
//   "###### Heading 6",
//   "    code block",
//   "```js",
//   'console.log("fenced code block");',
//   "```",
//   "<pre>**HTML block**</pre>",
//   "* list",
//   "    * list indented",
//   "1. ordered",
//   "2. list",
//   "    1. ordered list",
//   "    2. indented",
//   "",
//   "- [ ] task",
//   "- [x] list completed",
//   "",
//   "[link](https://nhn.github.io/tui.editor/)",
//   "> block quote",
//   "---",
//   "horizontal line",
//   "***",
//   '`code`, *italic*, **bold**, ~~strikethrough~~, <span style="color:#e11d21">Red color</span>',
//   "|table|head|",
//   "|---|---|",
//   "|table|body|",
//   "```uml",
//   "partition Conductor {",
//   '  (*) --> "Climbs on Platform"',
//   "  --> === S1 ===",
//   "  --> Bows",
//   "}",
//   "",
//   "partition Audience #LightSkyBlue {",
//   "  === S1 === --> Applauds",
//   "}",
//   "",
//   "partition Conductor {",
//   "  Bows --> === S2 ===",
//   "  --> WavesArmes",
//   "  Applauds --> === S2 ===",
//   "}",
//   "",
//   "partition Orchestra #CCCCEE {",
//   "  WavesArmes --> Introduction",
//   '  --> "Play music"',
//   "}",
//   "```",
//   "```chart",
//   ",category1,category2",
//   "Jan,21,23",
//   "Feb,31,17",
//   "",
//   "type: column",
//   "title: Monthly Revenue",
//   "x.title: Amount",
//   "y.title: Month",
//   "y.min: 1",
//   "y.max: 40",
//   "y.suffix: $",
//   "```"
// ].join("\n");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      [theme.breakpoints.up("md")]: {
        paddingLeft: "130px",
        paddingRight: "130px"
      }
    },
    grow: {
      flexGrow: 1
    },
    author: {
      marginBottom: "11px"
    },
    serial: {
      marginBottom: "11px"
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
    },
    footer: {
      [theme.breakpoints.up("md")]: {
        paddingLeft: "130px",
        paddingRight: "130px"
      },
      padding: theme.spacing(3, 2),
      marginTop: "auto",
      backgroundColor: "#f6f6f4"
    },
    commentEditor: {
      marginBottom: "10px"
    },
    root: {
      width: "100%"
      // maxWidth: 360,
      // backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
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
    <>
      <Container maxWidth="md" className={classes.container}>
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
                <Link to="/" color="inherit">
                  <Typography>山田太郎</Typography>
                </Link>
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
          <div className={classes.serial}>
            <Ribbon text="連載 | モデリング入門" />
          </div>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className={classes.title}
          >
            {articles.bakusoku.title}
          </Typography>
          <div className={classes.tags}>
            <TagLink label="JavaScript" to="/" />
            <TagLink label="初心者" to="/" />
            <TagLink label="Vue.js" to="/" />
            <TagLink label="コンポーネント" to="/" />
            <TagLink label="Vuex" to="/" />
          </div>
          <Viewer
            usageStatistics={false}
            language="ja"
            initialValue={articles.bakusoku.content}
            // previewStyle="vertical"
            // height="600px"
            // width="800px"
            // initialEditType="markdown"
            useCommandShortcut={true}
            exts={[
              {
                name: "chart",
                minWidth: 100,
                maxWidth: 600,
                minHeight: 100,
                maxHeight: 300
              },
              "scrollSync",
              "colorSyntax",
              "uml",
              "mark",
              "table"
            ]}
          />
        </Box>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="md" className={classes.container}>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Link to="/">
                  <Avatar alt="佐藤花子" src="/avatar.jpg" />
                </Link>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Link to="/">
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      佐藤花子
                    </Typography>
                  </Link>
                }
                secondary={
                  <>
                    <Link to="/" color="inherit">
                      <span
                        style={{ marginBottom: "10px", fontSize: "0.75rem" }}
                      >
                        2019年11月11日 16:07
                      </span>
                    </Link>
                    <div>
                      <Viewer
                        usageStatistics={false}
                        language="ja"
                        initialValue={`# 素晴らしい！

* foo
* bar
* baz`}
                        // previewStyle="vertical"
                        // height="600px"
                        // width="800px"
                        // initialEditType="markdown"
                        useCommandShortcut={true}
                        exts={[
                          {
                            name: "chart",
                            minWidth: 100,
                            maxWidth: 600,
                            minHeight: 100,
                            maxHeight: 300
                          },
                          "scrollSync",
                          "colorSyntax",
                          "uml",
                          "mark",
                          "table"
                        ]}
                      />
                    </div>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Link to="/">
                  <Avatar alt="佐藤花子" src="/avatar.jpg" />
                </Link>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Link to="/">
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      佐藤花子
                    </Typography>
                  </Link>
                }
                secondary={
                  <>
                    <Link to="/" color="inherit">
                      <span
                        style={{ marginBottom: "10px", fontSize: "0.75rem" }}
                      >
                        2019年11月11日 16:07
                      </span>
                    </Link>
                    <div>
                      <Viewer
                        usageStatistics={false}
                        language="ja"
                        initialValue={`情報共有ありがとうございます！

\`\`\`js
const foo = "bar";
\`\`\``}
                        // previewStyle="vertical"
                        // height="600px"
                        // width="800px"
                        // initialEditType="markdown"
                        useCommandShortcut={true}
                        exts={[
                          {
                            name: "chart",
                            minWidth: 100,
                            maxWidth: 600,
                            minHeight: 100,
                            maxHeight: 300
                          },
                          "scrollSync",
                          "colorSyntax",
                          "uml",
                          "mark",
                          "table"
                        ]}
                      />
                    </div>
                  </>
                }
              />
            </ListItem>
          </List>
          <div className={classes.commentEditor}>
            <Editor
              usageStatistics={false}
              // language="ja"
              // previewStyle="vertical"
              height="250px"
              // width="800px"
              // initialEditType="markdown"
              placeholder="コメントを入力してください"
              useCommandShortcut={true}
              exts={[
                {
                  name: "chart",
                  minWidth: 100,
                  maxWidth: 600,
                  minHeight: 100,
                  maxHeight: 300
                },
                "scrollSync",
                "colorSyntax",
                "uml",
                "mark",
                "table"
              ]}
            />
          </div>
          <Button variant="contained" color="secondary">
            コメントする
          </Button>
        </Container>
      </footer>
    </>
  );
}
