import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
  },
  registerFormWrapper: {
    width: '500px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#E9F0F2',
    height: '100%',
    position: 'absolute',
    right: 0,
    padding: theme.spacing(3),
  },
  registerFormHeader: {
    color: '#073947',
    width: '400px',
    height: '43px',
    fontSize: '36px',
    textAlign: 'center',
    marginBottom: '55px',
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
  finishInfo: {
    textAlign: 'center',
    fontSize: '15px',
    color: '#073947',
    marginTop: '30%'
  }
}));

export default useStyles;
