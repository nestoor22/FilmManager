import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "42px",
    background:
      "linear-gradient(45deg, rgba(6,124,157,1) 0%, rgba(9,151,182,1) 56%, rgba(210,235,242,1) 100%)",
    display: "flex",
    alignItems: "center",
  },
  menuWrapper: {
    width: "30%",
    display: "flex",
    justifyContent: "center",
    borderRight: "1px solid #BAC7CB",
  },
  headerActionsWrapper: {
    width: "70%",
    display: "flex",
    alignItems: "center",
  },
  headerActionBtn: {
    fontSize: "12px",
    marginLeft: "10px",
    padding: "2px",
    textTransform: "none",
  },
  menuBtn: {
    color: "#E9F0F2",
    textTransform: "initial",
    width: "100%",
  },
  headerBtn: {
    color: "#E9F0F2",
    width: "70%",
    justifyContent: "start",
    textTransform: "initial",
    paddingLeft: "40px",
    fontWeight: 600,
  },
  menuItem: {
    color: "#067C9D",
    "&:hover": {
      backgroundColor: "#D2EBF2",
    },
  },
});

export default useStyles;
