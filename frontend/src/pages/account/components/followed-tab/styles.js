import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
  },
  itemsWrapper: {
    width: '65%',
  },
  toTheTopBtn: {
    color: '#E9F0F2',
    position: 'fixed',
    bottom: '20px',
    right: '40px',
    '&:focus': {
      outline: 'none',
    },
  },
});

export default useStyles;
