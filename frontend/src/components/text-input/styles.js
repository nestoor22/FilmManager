import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  label: {
    marginBottom: 6,
    color: "#071B27",
    textTransform: "uppercase",
    fontSize: 10,
    lineHeight: "12px",
    letterSpacing: "0.035em",
  },
  textarea: {
    resize: "vertical",
    outline: "none",
    boxShadow: "none",
    padding: "9px 10px",
    fontSize: "13px",
    lineHeight: "18px",
    minHeight: "58px",
    maxHeight: "200px",
    borderRadius: 3,
    border: "1px solid #BECEDA",
    "&:hover": {
      border: "1px solid #41B7D7",
    },
    "&::placeholder": {
      color: "#A2A2A2",
    },
    "&:focus": {
      boxShadow: "0 0 3px 3px rgba(65, 183, 215, 0.35)",
      border: "1px solid #41B7D7",
    },
  },
  error: {
    border: "1px solid #EB5757",
    "&:hover": {
      border: "1px solid #EB5757",
    },
    "&:focus": {
      boxShadow: "none",
      border: "1px solid #EB5757",
    },
  },
});