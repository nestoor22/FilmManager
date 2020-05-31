import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  imageFieldWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: '30px',
  },
  birthdayWrapper: {
    marginTop: '40px',
    marginLeft: '20px',
    width: '220px',
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
  inlineFieldsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
});

export default useStyles;
