import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  loginFormWrapper: {
    marginTop: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: "600px",
    height: "350px",
  },
  loginForm: {
    padding: theme.spacing(3),
    width: "600px",
    height: "350px",
    backgroundColor: "#FFFFFF",
  },
  title: {
    marginBottom: 30,
  },
  descriptionText: {
    textAlign: "center",
  },
  button: {
    width: "100%",
    marginTop: 36,
    marginBottom: theme.spacing(3),
  },
  inputIndent: {
    marginBottom: theme.spacing(3),
  },
  passwordIcon: {
    fontSize: 18,
  },
  createNewAccount: {
    textAlign: "center",
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
    },
  },
  showIcon: {
    "&:focus": {
      outline: "none",
    },
  },
}));

export default useStyles;
