import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  creationPopUp: {
    width: '500px',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#C2C2C2',
      borderRadius: '2px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#335267',
      opacity: 0.48,
      borderRadius: '2px',
    },
  },
  closeBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '10px',
    '&:focus': {
      outline: 'none',
    },
  },
  creationPopUpHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#073947',
    width: '100%',
    height: '48px',
  },
  closeIcon: {
    fontSize: '17px',
    color: '#E9F0F2',
  },
  title: {
    fontSize: '18px',
    color: '#E9F0F2',
    paddingLeft: '30px',
  },
  formWrapper: {
    width: '100%',
    height: '100%',
    padding: '30px',
  },
  input: {
    width: '80%',
    marginBottom: '30px',
  },
  radioGroupRootClass: {
    padding: '10px 20px',
    marginBottom: '10px',
  },
});

export default useStyles;
