import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    height: '240px',
    maxHeight: '240px',
  },
  showInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '20px',
  },
  reviewContent: {
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
});

export default useStyles;
