import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  filtersBlock: {
    width: '300px',
    height: '100%',
    backgroundColor: '#fff',
  },
  peopleBlocksWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '65%',
    padding: '10px 20px',
  },
  inputRoot: {
    borderRadius: 5,
    color: '#073947',
    width: '100%',
    marginBottom: '20px',
    backgroundColor: '#E9F0F2',
  },
  input: {
    padding: '9px 10px',
    fontSize: 13,
    lineHeight: 18,
    color: '#073947',
    textAlign: 'start',
  },
  iconWrapper: {
    height: '100% !important',
    width: '30px',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    paddingRight: '8px',
    borderRight: '2px solid #073947',
  },
  inputRootFocused: {
    boxShadow: 'none',
    border: 'none',
  },
});

export default useStyles;
