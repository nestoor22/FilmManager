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
    color: '#fff',
  },
  registerFormHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#335267',
    width: '100%',
    height: '48px',
    marginBottom: '20px',
    paddingLeft: '20px',
  },
  registerFormFieldsWrapper: {
    padding: '0px 20px',
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
