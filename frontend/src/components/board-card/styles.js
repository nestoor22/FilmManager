import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  boardTile: {
    height: '280px',
    width: '800px',
    borderRadius: '3px',
    paddingTop: '72px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    '&:hover': {
      cursor: 'pointer',
    },
    marginBottom: '40px',
  },
  boardTileContent: {
    height: '208px',
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: '#073947',
    position: 'relative',
  },
  boardName: {
    fontSize: '32px',
    color: '#E9F0F2',
  },
  boardHeaderWrapper: {
    display: 'flex',
    height: '38px',
    alignItems: 'center',
    position: 'relative',
  },
  infoIcon: {
    position: 'absolute',
    right: '5px',
  },
  customChip: {
    margin: '5px',
    minWidth: '76px',
    marginRight: '44px',
    color: '#E9F0F2',
    backgroundColor: '#295E6D',
  },
  marksWrapper: {
    display: 'flex',
    marginTop: '20px',
  },
  markText: {
    fontSize: '15px',
    color: '#E9F0F2',
    minWidth: '140px',
    marginRight: '45px',
  },
  cardFooter: {
    display: 'flex',
    width: '100%',
    position: 'absolute',
    height: '40px',
    alignItems: 'center',
    bottom: 0,
  },
  actionsBtns: {
    position: 'absolute',
    right: '55px',
    display: 'flex',
  },
  actionBtnText: {
    width: '80px',
    fontSize: '15px',
    color: '#E9F0F2',
  },
});

export default useStyles;
