import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  shadows: ["none"] as any,
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      '"BlinkMacSystemFont"',
      '"Helvetica Neue"',
      "Helvetica",
      "Arial",
      '"Hiragino Sans"',
      '"Hiragino Kaku Gothic ProN"',
      '"Meiryo"',
      '"Segoe UI Symbol"',
      "sans-serif"
    ].join(",")
  }
});

export default theme;
