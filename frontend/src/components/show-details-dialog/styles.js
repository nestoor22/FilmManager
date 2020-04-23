import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    minWidth: "80%",
    height: "450px",
    top: "-120px",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#C2C2C2",
      borderRadius: "2px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#335267",
      opacity: 0.48,
      borderRadius: "2px",
    },
  },
  closeBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: "10px",
    "&:focus": {
      outline: "none",
    },
  },
  toolbar: {
    display: "flex",
    color: "#335267",
    justifyContent: "center",
    boxSizing: "border-box",
    alignItems: "center",
    minHeight: "48px",
    paddingTop: "20px",
  },
  closeIcon: {
    fontSize: "17px",
    color: "#000",
  },
  showTitle: {
    fontSize: "24px",
    color: "#335267",
    width: "fit-content",
    borderBottom: "1px solid #74c8e8",
  },
  dialogContent: {
    display: "flex",
  },
  showDetails: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  dialogPoster: {
    width: "300px",
    height: "450px",
    objectFit: "fill",
  },
  tabsRoot: {
    flex: "1 1 auto",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  customTabRoot: {
    borderBottom: "1px solid #E2EBF6",
    boxSizing: "border-box",
    "&:focus": {
      outline: "none",
    },
  },
});

export default useStyles;
