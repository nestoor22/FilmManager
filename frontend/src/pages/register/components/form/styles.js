import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  registerFormWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px',
  },
  registerForm: {
    width: '600px',
    backgroundColor: '#fff',
    padding: '20px 20px',
  },
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
    width: '255px',
  },
});

export default useStyles;
