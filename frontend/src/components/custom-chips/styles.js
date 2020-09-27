import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  pagination: {
    outline: 'none !important',
    border: 'none !important',
    '&:focus': {
      border: 'none !important',
      outline: 'none !important',
    },
  },
  tabsRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px',
    height: '80%',
    width: '85%',
  },
  customChip: {
    textTransform: 'capitalize',
    margin: '5px',
    border: '1px solid #E2EBF6',
    transition: '0.1s',
    '&:hover': {
      transform: 'scale(1.1, 1.1)',
    },
    color: '#E9F0F2',
    backgroundColor: '#073947',
  },
});

export default useStyles;
