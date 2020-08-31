import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: 52,
    backgroundColor: '#073947',
    alignItems: 'center',
    boxShadow: '0px 1px 0px #073947',
  },
  logo: {
    width: 115,
  },
  search: {
    width: '280px',
  },
  navigation: {
    display: 'flex',
    position: 'absolute',
    right: '20px',
  },
  navigationItems: {
    padding: '0',
    margin: '0',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  inputRoot: {
    borderRadius: 5,
    color: '#073947',
    width: '100%',
    backgroundColor: '#E9F0F2',
  },
  input: {
    padding: '9px 10px',
    fontSize: 13,
    lineHeight: 18,
    color: '#073947',
    textAlign: 'end',
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
  navigationItem: {
    fontSize: '15px',
    cursor: 'pointer',
    '&:not(:last-child)': {
      marginRight: 25,
    },
  },
  navigationItemLink: {
    display: 'inline-block',
    color: '#E9F0F2',
    '&:hover': {
      color: '#5F8792',
      textDecoration: 'none',
    },
  },
  activeNavigationLink: {
    color: '#E9F0F2',
    fontWeight: 'bold',
  },
  button: {
    fontSize: '15px',
    color: '#E9F0F2 !important',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      textDecoration: 'none',
    },
  },
  menuItem: {
    color: '#335267 !important',
  },
  showsPopup: {
    width: '280px',
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
