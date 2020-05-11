import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  formWrapper: {
    width: '100%',
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  sliderWrapper: {
    width: '25%',
  },
  rating: {
    marginLeft: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '10px',
    fontSize: '18px',
  },
  actionBtnRoot: {
    boxShadow: 'none',
    border: '1px solid #0e8bb4',
    borderRadius: '3px',
    backgroundColor: '#254052',
    color: '#FFFFFF',
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 500,
    padding: '8px 15px',
    minWidth: '80px',
    '&:hover': {
      backgroundColor: '#254052',
      color: '#FFFFFF',
    },
    '&:focus': {
      outline: 'none',
    },
  },
});

export default useStyles;
