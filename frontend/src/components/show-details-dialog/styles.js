import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    minWidth: "80%",
    minHeight: "600px",
  },
  closeBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: "10px",
    "&:focus": {
      outline: "none",
    },
  },
  closeIcon: {
    fontSize: "17px",
    color: "#000",
  },
});

export default useStyles;
