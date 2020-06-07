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
    color: '#E9F0F2',
    margin: 0,
    fontSize: '18px',
  },
  subtitle: {
    fontSize: '13px',
    color: '#E9F0F2',
  },
  content: {
    height: 86,
    padding: 0,
    paddingLeft:5,
    '&:focus': {
      outline: 'none',
    },
    backgroundColor: '#073947'
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
