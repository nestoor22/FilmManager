import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    padding: '0px 20px',
    position: 'relative',
  },
  addNewReviewBtn: {
    width: '90%',
    position: 'absolute',
    display: 'flex',
    bottom: '10px',
    alignItems: 'center',
    textTransform: 'initial',
    color: '#5F8792',
    '&:focus': {
      outline: 'none',
    },
  },
  noReviewsBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noReviewsTitle: {
    fontSize: '21px',
    color: '#073947',
  },
  submitBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#073947',
    color: '#E9F0F2',
    '&:hover': {
      backgroundColor: '#E9F0F2',
      color: '#073947',
    },
  },
});

export default useStyles;
