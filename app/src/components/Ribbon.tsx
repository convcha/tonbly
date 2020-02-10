import React from "react";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./Ribbon.css";
import { Link } from "./Link";

interface RibbonProps {
  text: string;
}

// TODO: use JSS instead of Ribbon.css
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "inline-block",
//       position: "relative",
//       height: "60px",
//       lineHeight: "60px",
//       textAlign: "center",
//       padding: "0 40px 0 18px",
//       fontSize: "18px",
//       background: "#ffc668",
//       color: "#FFF",
//       boxSizing: "border-box",
//       "&:after": {
//         position: "absolute",
//         content: "",
//         width: "0px",
//         height: "0px",
//         zIndex: 1,
//         top: 0,
//         right: 0,
//         borderWidth: "30px 15px 30px 0px",
//         borderColor: "transparent red transparent transparent",
//         borderStyle: "solid"
//       }
//     }
//   })
// );

export const Ribbon = (props: RibbonProps) => {
  // const classes = useStyles();

  return (
    <Link to="/" underline="none" color="inherit">
      <h3 className="ribbon">{props.text}</h3>
    </Link>
  );
};
