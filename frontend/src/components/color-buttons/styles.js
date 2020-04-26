import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  wrapper: {
    marginBottom: "17px",
  },
  label: {
    marginBottom: "6px",
    color: "#071B27",
    textTransform: "uppercase",
    fontSize: 10,
    lineHeight: "12px",
  },
  radioBtnLabelChecked: {
    color: "#000000",
    fontWeight: 500,
  },
});

export const formControlLabelStyles = makeStyles({
  root: {
    marginRight: "25px",
  },
  label: {
    color: "#838383",
  },
});

export const radioBtnStyles = makeStyles({
  root: {
    color: "#fff",
    fontSize: 12,
  },
  checked: {
    color: "#fff",
  },
});
