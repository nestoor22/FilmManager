import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  listsNamesWrapper: {
    width: '240px',
    marginLeft: '50px',
    marginTop: '10px',
  },
  listName: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
  },
  listNameTitle: {
    fontSize: '15px',
    color: '#E9F0F2',
    marginLeft: '10px',
  },
  list: {
    width: '360px',
    height: 'fit-content',
    minHeight: 'fit-content',
    backgroundColor: '#E9F0F2',
    marginRight: '80px',
    '&:last-child': {
      marginRight: 0,
    },
    position: 'relative',
  },
  listsContent: {
    display: 'flex',
    padding: '20px',
    width: '100%',
    justifyContent: 'center',
  },
  listTitle: {
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#073947',
    marginBottom: '10px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  itemsListHeader: {
    fontSize: '24px',
    marginLeft: '17px',
    color: '#E9F0F2',
  },
  showInfo: {
    height: '50px',
    width: '100%',
    backgroundColor: '#073947',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  poster: {
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
    height: '50px',
    width: '40px',
  },
  showTitle: {
    paddingLeft: '20px',
    fontSize: '15px',
    width: '80%',
    color: '#E9F0F2',
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
  button: {
    '&:hover': {
      cursor: 'pointer',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  addNewItemBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    bottom: '5px',
  },
  inputRoot: {
    borderRadius: 5,
    color: '#E9F0F2',
    width: '100%',
    backgroundColor: '#073947',
  },
  input: {
    padding: '9px 10px',
    fontSize: 13,
    lineHeight: 18,
    color: '#E9F0F2',
    textAlign: 'start',
  },
  inputRootFocused: {
    boxShadow: 'none',
    border: 'none',
  },
  visibilityBtn: {
    position: 'absolute',
    right: '5px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export default useStyles;
