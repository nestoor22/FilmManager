import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  showIcon: {
    '&:focus': {
      outline: 'none',
    },
  },
  inputIndent: {
    marginBottom: '20px',
  },
  title: {
    marginBottom: '20px',
  },
  inlineFieldsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  nameField: {
    width: '180px',
  },
  buttonWrapper: {
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
  registerForm: {
    width: '380px',
  },
});

export default useStyles;
