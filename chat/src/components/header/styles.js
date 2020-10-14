import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "42px",
    backgroundColor: "#073947",
    display: "flex",
    alignItems: "center",
  },
  menuWrapper: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
    borderRight: "1px solid #E9F0F2",
  },
  menuBtn: {
    color: "#E9F0F2",
    textTransform: "initial",
    width: "100%",
  },
});

export default useStyles;
