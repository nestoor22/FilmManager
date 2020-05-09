import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    width: '100%',
  },
  sidebar: {
    width: '80px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  iconWrapper: {
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  customTabRoot: {
    padding: '0px',
    boxSizing: 'border-box',
    fontSize: '13px',
    maxWidth: '80px!important',
    '&:focus': {
      outline: 'none',
    },
  },
  customTabWrapper: {
    maxWidth: '80px!important',
    minWidth: '80px!important',
    width: '80px!important',
  },
  icon: {
    fill: '#0a2b5c',
    fontSize: '30px',
  },
});

export default useStyles;
