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
    height: '700px',
    backgroundColor: '#E9F0F2',
    marginRight: '80px',
    '&:last-child': {
      marginRight: 0,
    },
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
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  itemsListHeader: {
    fontSize: '24px',
    marginLeft: '17px',
    color: '#E9F0F2',
  },
});

export default useStyles;
