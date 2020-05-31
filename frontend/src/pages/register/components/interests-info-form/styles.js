import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  registerForm: {
    width: '100%',
  },
  buttonWrapper: {
    marginTop: '40px',
    justifyContent: 'center',
  },
  actionBtnClass: {
    marginTop: '25px',
    width: '190px',
    fontSize: '15px',
    color: '#E9F0F2',
    backgroundColor: '#165061',
    '&:hover': {
      backgroundColor: '#5F8792',
    },
  },
  inputIndent: {
    marginBottom: '30px'
  }
});

export default useStyles;
