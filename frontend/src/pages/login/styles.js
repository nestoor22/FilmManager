import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
  },
  loginFormWrapper: {
    marginTop: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '600px',
    height: '350px',
  },
  loginForm: {
    position: 'absolute',
    right: 0,
    padding: theme.spacing(3),
    width: '500px',
    height: '100%',
    backgroundColor: '#E9F0F2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '36px',
    height: '43px',
    width: '302px',
    color: '#073947',
    marginBottom: 54,
    marginTop: 78,
    textAlign: 'center',
  },
  descriptionText: {
    textAlign: 'center',
  },
  button: {
    width: '302px',
    marginLeft: '35px',
    fontSize: '15px',
    color: '#E9F0F2',
    backgroundColor: '#165061',
    marginBottom: theme.spacing(3),
    '&:hover': {
      backgroundColor: '#5F8792',
    },
  },
  googleButton: {
    width: '302px',
    marginLeft: '35px',
    marginTop: '14px',
    fontSize: '15px',
    color: '#073947 !important',
    backgroundColor: '#E9F0F2',
    marginBottom: theme.spacing(3),
    '&:hover': {
      backgroundColor: '#5F8792',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  inputIndent: {
    width: '302px',
  },
  inputIndentWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  passwordIcon: {
    fontSize: 18,
  },
  loginWithSubheader: {
    fontSize: '24px',
    color: '#073947',
  },
  createNewAccount: {
    textAlign: 'center',
    fontWeight: 'bold',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  showIcon: {
    '&:focus': {
      outline: 'none',
    },
  },
}));

export default useStyles;
