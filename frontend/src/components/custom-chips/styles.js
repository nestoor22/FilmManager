import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  pagination: {
    outline: "none !important",
    border: "none !important",
    "&:focus": {
      border: "none !important",
      outline: "none !important",
    },
  },
  tabsRoot: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "20px",
  },
  customChip: {
    textTransform: "capitalize",
    margin: "5px",
    border: "1px solid #E2EBF6",
    transition: "0.1s",
    "&:hover": {
      transform: "scale(1.1, 1.1)",
    },
  },
});

export default useStyles;
