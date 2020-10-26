import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  avatar: {
    width: "25px",
    height: "25px",
    fontSize: "15px",
  },
  messageTextWrapper: {
    maxWidth: "50%",
    minWidth: "20%",
    width: "fit-content",
    height: "fit-content",
    padding: "5px",
    backgroundColor: "rgb(159,220,241)",
    borderRadius: "5px",
  },
  messageText: {
    color: "#073947",
    fontSize: "13px",
  },
});

export default useStyles;
