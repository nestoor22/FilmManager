import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  accountTab: {
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight: '600px',
    justifyContent: 'center',
    backgroundColor: '#E9F0F2',
  },
  sliderWrapper: {
    width: '50%',
    marginBottom: '40px',
  },
  generalInfo: {
    display: 'flex',
    paddingTop: '20px',
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
    color: '#073947',
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
    fill: '#073947',
  },
  customChip: {
    textTransform: 'capitalize',
    margin: '5px',
    border: '1px solid #E2EBF6',
    color: '#E9F0F2',
    backgroundColor: '#073947',
  },
  preferencesInfo: {
    marginTop: '20px',
  },
  ratingsInfo: {
    marginTop: '0px',
  },
  blockTitle: {
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#073947',
    paddingBottom: '10px',
  },
});

export default useStyles;
