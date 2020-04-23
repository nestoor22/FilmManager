import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0E8BB4",
    },
    secondary: {
      main: "#05458d",
    },
    error: {
      main: "#EB5757",
    },
  },
  typography: {
    fontFamily: "Fira Sans",
    h1: {
      fontSize: 18,
      fontWeight: 500,
    },
    h2: {
      fontSize: 15,
      fontWeight: 500,
    },
    h3: {
      fontSize: 10,
      fontWeight: 500,
    },
    body1: {
      fontSize: 13,
      color: "#071B27",
    },
    body2: {
      fontSize: 11,
      fontWeight: 500,
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 500,
    },
  },
});

export default theme;
