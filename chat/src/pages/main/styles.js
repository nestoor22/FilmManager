import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "98vh",
    maxHeight: "98vh",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    width: "65%",
    height: "100%",
    backgroundColor: "#E9F0F2",
  },
  chatsWrapper: {
    maxHeight: "calc(98vh - 42px)",
    minHeight: "calc(98vh - 42px)",
    display: "flex",
  },
});

export default useStyles;
