import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  creationPopUp: {
    width: "500px",
    height: "600px",
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
  creationPopUpHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "#335267",
    width: "100%",
    height: "48px",
  },
  closeIcon: {
    fontSize: "17px",
    color: "#fff",
  },
  title: {
    fontSize: '18px',
    color: '#fff',
    paddingLeft: '30px'
  },
  formWrapper:{
    width: '100%',
    height: '100%',
    padding: '30px'
  },
  input: {
    width: '80%',
    marginBottom: '30px'
  },
  radioGroupRootClass: {
    padding: '10px 20px'
  }
});

export default useStyles;
