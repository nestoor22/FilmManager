import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paginationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemRoot: {
    border: "1px solid #E2EBF6",
    fontSize: "13px",
    minWidth: "30px",
    height: "30px",
    lineHeight: "30px",
    "&:focus": {
      outline: "none !important",
    },
  },
  itemEllipsis: {
    border: 0,
    "&:focus": {
      outline: "none !important",
    },
  },
  itemSelected: {
    color: "#335267",
    "&:focus": {
      outline: "none !important",
    },
  },
});

export default useStyles;
