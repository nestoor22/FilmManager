import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 185,
    maxHeight: 330,
    margin: 20,
  },
  menuItem: {
    color: '#335267 !important',
  },
  title: {
    margin: 0,
    fontSize: '15px',
  },
  content: {
    padding: 0,
    '&:focus': {
      outline: 'none',
    },
    '&:last-child': {
      padding: 0,
    },
  },
  actionsContent: {
    padding: 0,
  },
  button: {
    '&:focus': {
      outline: 'none',
    },
  },
});

export default useStyles;
