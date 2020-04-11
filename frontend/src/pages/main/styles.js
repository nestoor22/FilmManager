import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  toolbar: {
    display: "flex",
    paddingTop: "80px",
    marginLeft: "150px",
    justifyContent: "center",
    boxSizing: "border-box",
    alignItems: "center",
    minHeight: "48px",
  },
  selected: {
    fontWeight: "bold",
  },
  indicator: {
    backgroundColor: "white",
  },
  customTabRoot: {
    padding: "18px 30px",
    width: "180px",
    borderBottom: "1px solid #E2EBF6",
    boxSizing: "border-box",
    fontSize: "20px",
    "&:focus": {
      outline: "none",
    },
  },
  buttonRoot: {
    fontSize: "13px",
    fontWeight: "bold",
    padding: "3px 20px",
    marginLeft: "10px",
  },
  tabsRoot: {
    flex: "1 1 auto",
    display: "flex",
    width: "100%",
  },
  tabs: {
    flex: "0 1 220px",
  },
  customTabWrapper: {
    alignItems: "center",
  },
  tabItemTitle: {
    fontWeight: "bold",
    lineHeight: "18px",
    marginBottom: 12,
    color: "inherit",
  },
  tabContentWrapper: {
    padding: "0",
  },
  textColorInheritCustom: {
    opacity: 1,
    color: "#E2F5F8",
  },
  contentRoot: {
    display: "flex",
    paddingTop: "50px",
    width: "100%",
  },
  filterListRoot: {
    width: "250px",
    maxHeight: "350px",
    padding: "40px 10px",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  select: {
    width: "250px",
    "&:after": {
      backgroundColor: "#071B27",
      height: "2px",
    },
    "&:before": {
      height: "2px",
      backgroundColor: "#335267",
    },
  },
});

export default useStyles;
