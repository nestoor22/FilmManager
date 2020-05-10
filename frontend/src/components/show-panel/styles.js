import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  showRow: {
    height: '50px',
    position: 'relative',
    width: '600px',
    borderRadius: '3px',
    paddingRight: '10px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0a2b5c',
  },
  poster: {
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
    height: '50px',
    width: '40px',
  },
  showTitle: {
    paddingLeft: '20px',
    width: '450px',
    fontSize: '24px',
    color: '#fff',
  },
  releaseYear: {
    paddingLeft: '20px',
    color: '#fff',
  },
  showRating: {
    right: 10,
    position: 'absolute',
    fontSize: '24px',
    color: '#fff',
  },
  actionsIcons: {
    width: '100px',
    marginBottom: '10px',
    height: '50px',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  iconWrapper: {
    padding: '5px',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:focus': {
      outline: 'none',
    },
  },
});

export default useStyles;
