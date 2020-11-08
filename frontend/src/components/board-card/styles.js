import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  boardTile: {
    width: '800px',
    borderRadius: '3px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    '&:hover': {
      cursor: 'pointer',
    },
    marginBottom: '40px',
  },
  showsInCollectionWrapper: {
    minHeight: '72px',
    maxWidth: 'fit-content',
    backgroundColor: '#073947',
    display: 'flex',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      height: '3px',
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
  boardTileContent: {
    height: '208px',
    backgroundColor: '#073947',
    position: 'relative',
    '&:hover': {
      cursor: 'default',
    },
  },
  boardName: {
    fontSize: '32px',
    color: '#E9F0F2',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  boardHeaderWrapper: {
    display: 'flex',
    height: '38px',
    alignItems: 'center',
    position: 'relative',
    paddingLeft: '10px',
    paddingRight: '10px',
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
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  markText: {
    fontSize: '15px',
    color: '#E9F0F2',
    minWidth: '140px',
    marginRight: '45px',
  },
  miniPoster: {
    minHeight: '72px',
    minWidth: '40px',
    maxHeight: '72px',
    maxWidth: '40px',
    display: 'flex',
  },
  cardFooter: {
    display: 'flex',
    width: '100%',
    position: 'absolute',
    height: '40px',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
    bottom: 0,
  },
  actionsBtns: {
    position: 'absolute',
    right: '55px',
    display: 'flex',
  },
  actionBtnText: {
    width: '100px',
    fontSize: '15px',
    color: '#E9F0F2',
    '&:focus': {
      outline: 'none',
    },
  },
  disabled: {
    color: '#295E6D !important',
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
  numberIcon: {
    display: 'flex',
    alignItems: 'center',
    height: '30px',
    width: '30px',
  },
});

export default useStyles;
