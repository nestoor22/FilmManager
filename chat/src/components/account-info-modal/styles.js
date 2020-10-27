import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    minWidth: "50%",
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
  generalInfo: {
    display: "flex",
    width: "100%",
    backgroundColor: "#067C9D",
    padding: "20px 0px",
  },
  closeIcon: {
    fontSize: "17px",
    color: "#E9F0F2",
  },
  avatar: {
    height: "100px",
    width: "100px",
    fontSize: "32px",
    backgroundColor: "#073947",
    marginLeft: "10px",
  },
  userName: {
    marginLeft: "10%",
    marginTop: "20px",
    fontSize: "18px",
    color: "#E9F0F2",
  },
});

export default useStyles;
