import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  verticalTabs: {
    display: "flex",
    flexDirection: "column",
    width: "420px",
    borderRight: "1px solid #fff",
  },
  boardsCardsWrapper: {
    padding: "30px",
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  addNewCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "200px",
    height: "100px",
  },
  createNewButton: {
    width: "200px",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "&:focus": {
      outline: "none",
    },
  },
  createNewButtonText: {
    color: "#fff",
    fontSize: "15px",
  },
  boardsBlockTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: "30px",
  },
  boardCard: {
    width: "200px",
    height: "100px",
    marginBottom: "30px",
    borderRadius: "3px",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.05, 1.05)",
      cursor: "pointer",
    },
  },
  boardsRow: {
    display: "flex",
    flexFlow: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: "100%",
    flexDirection: "row",
    marginBottom: "20px",
  },
  boardTitle: {
    paddingLeft: "15px",
    paddingTop: "10px",
    fontWeight: "bold",
    fontSize: "15px",
    color: "#000",
  },
});

export default useStyles;
