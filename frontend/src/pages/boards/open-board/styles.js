import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  subHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "36px",
    background: "rgba(172,171,171,0.6)",
  },
  boardName: {
    paddingLeft: "20px",
    paddingRight: "20px",
    fontSize: "15px",
    fontWeight: "bold",
  },
  lists: {
    width: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
  },
  list: {
    width: "250px",
    height: "500px",
    backgroundColor: "#fff",
    margin: "10px",
  },
  addNewCard: {
    display: "flex",
  },
  addNewIcon: {
    fill: "#717171",
    fontSize: "20px",
  },
  createNewButtonText: {
    paddingLeft: "15px",
  },
  createNewButton: {
    margin: "10px",
    height: "30px",
    background: "rgba(0,0,0,.16)",
    "&:focus": {
      outline: "none",
    },
  },
});

export default useStyles;
