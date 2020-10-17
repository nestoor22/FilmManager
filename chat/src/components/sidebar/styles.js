import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "30%",
    borderRight: "1px solid #BAC7CB",
    overflowX: "hidden",
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
  chatItemWrapper: {
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#DBE3E5",
    },
  },
  avatar: {
    height: "40px",
    width: "40px",
    backgroundColor: "#165061",
    marginLeft: "10px",
  },
  inputRoot: {
    borderRadius: 3,
    color: "#073947",
    width: "90%",
    height: "36px",
    backgroundColor: "#fff",
    marginBottom: "10px",
    marginTop: "10px",
  },
  input: {
    padding: "9px 10px",
    fontSize: 13,
    lineHeight: 18,
    color: "#073947",
  },
  iconWrapper: {
    height: "100% !important",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    paddingRight: "8px",
    borderRight: "2px solid #0997B6",
  },
  inputRootFocused: {
    boxShadow: "none",
    border: "none",
  },
  chatInfo: {
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    paddingLeft: "15px",
    paddingRight: "20px",
    overflow: "hidden",
    paddingTop: "20px",
  },
  lastMessage: {
    width: "100%",
    height: "18px",
    fontSize: "12px",
    overflow: "hidden",
    color: "#073947",
  },
  title: {
    width: "100%",
    height: "18px",
    fontSize: "16px",
    overflow: "hidden",
    color: "#073947",
    fontWeight: 600,
    marginBottom: "5px",
  },
});

export default useStyles;
