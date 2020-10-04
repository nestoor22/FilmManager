import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#E9F0F2',
    borderRadius: '5px',
    marginBottom: '20px',
    padding: '5px',
    position: 'relative',
  },
  avatarImage: {
    width: '150px',
    height: '150px',
    fontSize: '60px',
    marginRight: '30px',
    '&:hover': {
      transform: 'scale(1.05, 1.05)',
      cursor: 'pointer',
      border: '1px solid #073947',
    },
  },
  generalInfo: {
    paddingTop: '10px',
    width: '100%',
  },
  userName: {
    width: 'fit-content',
    fontSize: '23px',
    height: '30px',
    marginBottom: '10px',
    '&:hover': {
      cursor: 'pointer',
      borderBottom: '1px solid #073947',
      color: '#5F8792',
    },
  },
  textInput: {
    fontSize: '18px',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '350px',
    minWidth: '200px',
  },
  accountTabIcon: {
    marginRight: '10px',
    fontSize: '20px',
    fill: '#073947',
  },
  followersInfo: {
    fontSize: '18px',
    fontWeight: 600,
    marginRight: '10px',
  },
  followBtn: {
    position: 'absolute',
    right: '10px',
    top: '15px',
    padding: '2px',
    color: '#E9F0F2',
    backgroundColor: '#073947',
    '&:hover': {
      backgroundColor: '#5F8792',
    },
  },
});

export default useStyles;
