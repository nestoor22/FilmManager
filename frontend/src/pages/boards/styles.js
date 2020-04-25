import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  verticalTabs: {
    display: "flex",
    flexDirection: "column",
    width: "420px",
    borderRight: '1px solid #fff'
  },
});

export default useStyles;
