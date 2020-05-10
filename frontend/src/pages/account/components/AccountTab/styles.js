import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  accountTab: {
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight: '600px',
    backgroundColor: '#fff',
  },
  generalInfo: {
    display: 'flex',
    paddingTop: '20px',
    width: '100%',
    paddingLeft: '110px',
  },
  avatarImage: {
    width: '200px',
    height: '200px',
    fontSize: '80px',
    marginBottom: '20px',
  },
  textInfo: {
    display: 'flex',
    paddingLeft: '120px',
    paddingTop: '20px',
    width: '100%',
    flexDirection: 'column',
  },
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '220px',
  },
  nameInput: {
    fontSize: '32px',
    paddingBottom: '20px',
    color: '#0a2b5c',
  },
  textInput: {
    fontSize: '15px',
  },
  infoRow: {
    display: 'flex',
    paddingBottom: '30px',
  },
  info: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: '80px',
    width: '200px',
  },
  accountTabIcon: {
    marginRight: '10px',
    fontSize: '20px',
    fill: '#0a2b5c',
  },
  customChip: {
    textTransform: 'capitalize',
    margin: '5px',
    border: '1px solid #E2EBF6',
    color: '#fff',
    backgroundColor: '#0a2b5c',
  },
  preferencesInfo: {
    marginTop: '20px',
  },
  ratingsInfo: {
    marginTop: '20px',
  },
  blockTitle: {
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#0a2b5c',
    paddingBottom: '10px',
  },
});

export default useStyles;
