import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cancelBtnRoot: {
    border: "1px solid #0e8bb4",
    borderRadius: "3px",
    fontSize: "13px",
    lineHeight: "18px",
    fontWeight: 500,
    color: "#254052",
    padding: "8px 15px",
    minWidth: "80px",
    marginRight: "15px",
    "&:focus": {
      outline: "none",
    },
  },
  actionBtnRoot: {
    boxShadow: "none",
    border: "1px solid #0e8bb4",
    borderRadius: "3px",
    backgroundColor: "#254052",
    color: "#FFFFFF",
    fontSize: "13px",
    lineHeight: "18px",
    fontWeight: 500,
    padding: "8px 15px",
    minWidth: "80px",
    "&:hover": {
      backgroundColor: "#254052",
      color: "#FFFFFF",
    },
    "&:focus": {
      outline: "none",
    },
  },
});
