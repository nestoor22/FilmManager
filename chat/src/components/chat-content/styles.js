import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  noSelectedChatBlock: {
    width: "100%",
    textAlign: "center",
    color: "#073947",
  },
  messagesContent: {
    width: "90%",
    height: "100%",
    position: "relative",
  },
  inputMessageFieldWrapper: {
    width: "100%",
    position: "absolute",
    bottom: "30px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  messageInputField: {
    width: "80%",
    minHeight: "30px",
    maxHeight: "100px",
    height: "fit-content",
    color: "#073947",
    borderBottom: "1px solid rgb(9 151 182)",
    padding: "10px",
    marginBottom: "5px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#E9F0F2",
      borderRadius: "2px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#DBE3E5",
      opacity: 0.48,
      borderRadius: "2px",
    },
  },
  optionsWrapper: {
    width: "80%",
    display: "flex",
    justifyContent: "flex-end",
  },
  sendBtn: {
    textTransform: "initial",
    padding: "2px",
    backgroundColor: "rgb(9 151 182)",
    color: "#DBE3E5",
    "&:hover": {
      backgroundColor: "rgb(9 151 182)",
    },
  },
});

export default useStyles;
