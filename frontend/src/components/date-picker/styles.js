import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  wrapper: {
    position: "relative",
    marginBottom: "36px",
  },
  label: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 6,
    color: "#071B27",
    fontSize: 10,
    lineHeight: "12px",
    letterSpacing: "0.035em",
  },
  inputLabel: {
    display: "block",
    marginBottom: 6,
    color: "#071B27",
    textTransform: "uppercase",
    fontSize: 10,
    lineHeight: "12px",
    letterSpacing: "0.035em",
  },
  hiddenDateRangePicker: {
    position: "static",
    top: "26px",
    left: "0",
    width: "100%",
    "&:focus": {
      outline: "none",
    },
  },
  customInputDate: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    border: "1px solid #BECEDA",
    borderRadius: "3px",
    boxSizing: "border-box",
    width: "100%",
    cursor: "pointer",
    fontSize: "13px",
    lineHeight: "10px",
    padding: "7px 12px",
    position: "absolute",
    zIndex: "1",
    "&:hover": {
      border: "1px solid #41B7D7",
    },
  },
  calendarIcon: {
    fontSize: "20px",
    marginRight: "7px",
  },
  focus: {
    boxShadow: "0 0 3px 3px rgba(65, 183, 215, 0.35)",
    border: "1px solid #41B7D7",
  },
  errorInput: {
    border: "1px solid #EB5757",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #EB5757",
    },
  },
  error: {
    marginTop: "10px",
  },
});
