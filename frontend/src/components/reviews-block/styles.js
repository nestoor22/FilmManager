import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    padding: '0px 20px',
    position: 'relative',
  },
  reviewsBlock: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
  },
  reviewItem: {
    marginTop: '10px',
    maxHeight: '120px',
    overflow: 'hidden',
  },
  reviewHeader: {
    display: 'flex',
    position: 'relative',
    marginBottom: '5px',
    backgroundColor: '#E2EBF6',
    borderRadius: '5px',
    padding: '5px',
  },
  reviewContent: {
    maxHeight: '120px',
    boxShadow: 'inset 0px -18px 5px 2px rgba(226,235,246,0.28)',
  },
  author: {
    color: '#5F8792',
    '&:hover': {
      color: '#073947',
      cursor: 'pointer',
    },
  },
  fullVersionBtn: {
    textAlign: 'end',
    paddingRight: '5px',
    color: '#5F8792',
    '&:hover': {
      color: '#073947',
      cursor: 'pointer',
    },
  },
  likesBlock: {
    display: 'flex',
    position: 'absolute',
    right: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNewReviewBtn: {
    width: '90%',
    position: 'absolute',
    display: 'flex',
    top: '10px',
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
