import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
    maxHeight: 390,
    margin: 20,
  },
  poster: {
    minWidth: '220px',
    minHeight: '300px',
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
    paddingBottom: '10px',
  },
  content: {
    padding: 0,
    paddingLeft: 5,
    '&:focus': {
      outline: 'none',
    },
    backgroundColor: '#073947',
  },
  actionsContent: {
    padding: 0,
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#073947',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'initial',
    color: '#BAC7CB',
    '&:focus': {
      outline: 'none',
    },
  },
});

export default useStyles;
