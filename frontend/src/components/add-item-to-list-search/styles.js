import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inputRoot: {
    zIndex: 999,
    borderRadius: 5,
    color: '#E9F0F2',
    width: '100%',
    backgroundColor: '#073947',
  },
  input: {
    padding: '9px 10px',
    fontSize: 13,
    lineHeight: 18,
    color: '#ffffff',
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
    backgroundColor: '#073947',
  },
  showsPopup: {
    width: '100%',
    maxHeight: '350px',
    height: 'fit-content',
    overflowY: 'scroll',
    display: 'flex',
    padding: '5px 10px',
    position: 'absolute',
    backgroundColor: '#E9F0F2',
    flexDirection: 'column',
    borderRadius: 5,
    scrollbarWidth: '1px',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#C2C2C2',
      borderRadius: '2px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#335267',
      opacity: 0.48,
      borderRadius: '2px',
    },
  },
  showRow: {
    height: '80px',
    position: 'relative',
    marginBottom: '10px',
    width: '100%',
    borderRadius: '3px',
    display: 'flex',
    backgroundColor: '#073947',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  poster: {
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
    height: '80px',
    width: '60px',
  },
  showTitle: {
    paddingLeft: '10px',
    width: '100%',
    fontSize: '15px',
    color: '#fff',
  },
  rootMedia: {
    display: 'flex',
  },
});

export default useStyles;
