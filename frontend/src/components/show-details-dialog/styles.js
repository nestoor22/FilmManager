import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    minWidth: "80%",
    height: "450px",
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
  closeIcon: {
    fontSize: "17px",
    color: "#000",
  },
  showTitle: {
    fontSize: '24px',
    borderBottom: '1px solid #74c8e8'
  },
  dialogContent: {
    display: 'flex'
  },
  dialogPoster: {
    width: '300px',
    height: '450px',
    objectFit: 'fill'
  }
});

export default useStyles;
