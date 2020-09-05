import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
  },
  infoSidebar: {
    height: 'calc(100vh - 52px)',
    paddingTop: '28px',
    paddingLeft: '10px',
    paddingRight: '10px',
    minWidth: '466px',
    backgroundColor: '#5F8792',
    display: 'flex',
    flexDirection: 'column',
  },
  contentWrapper: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  shareIcon: {
    color: '#E9F0F2',
    width: '20px',
  },
  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    fontSize: '32px',
    color: '#E9F0F2',
    width: '100%',
    textAlign: 'center',
  },
  description: {
    marginTop: '10px',
    fontSize: '13px',
    color: '#E9F0F2',
    width: '100%',
    textAlign: 'center',
  },
  ownersBlockWrapper: {
    marginTop: '30px',
  },
  subheader: {
    color: '#E9F0F2',
    fontSize: '18px',
  },
  avatarsWrapper: {
    display: 'flex',
    width: '240px',
    marginLeft: '50px',
    marginTop: '10px',
  },
  avatarImage: {
    height: '30px',
    width: '30px',
    color: '#073947',
    backgroundColor: '#E9F0F2',
    fontSize: '15px',
    '&:not(:first-child)': {
      marginLeft: -13,
    },
    '&:hover': {
      transform: 'scale(1.05, 1.05)',
      cursor: 'pointer',
      zIndex: 999,
    },
  },
  listsBlockWrapper: {
    marginTop: '30px',
  },
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
    minHeight: '400px',
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
    position: 'absolute',
    bottom: '5px',
  },
  addNewListBtn: {
    border: '1px solid #E9F0F2',
    borderRadius: '3px',
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 500,
    color: '#E9F0F2',
    padding: '8px 15px',
    minWidth: '80px',
    marginTop: '40px',
    '&:focus': {
      outline: 'none',
    },
  },
});

export default useStyles;
