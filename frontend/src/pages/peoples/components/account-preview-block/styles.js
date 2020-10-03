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
  },
  generalInfo: {
    paddingTop: '10px',
    width: '100%',
  },
  userName: {
    fontSize: '23px',
    marginBottom: '10px',
  },
  textInput: {
    fontSize: '15px',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  info: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '250px',
  },
  accountTabIcon: {
    marginRight: '10px',
    fontSize: '20px',
    fill: '#073947',
  },
  followersInfo: {
    fontSize: '15px',
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
