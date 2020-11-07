import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
  },
  filtersSidebar: {
    height: 'calc(100vh - 52px)',
    paddingTop: '28px',
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '466px',
    background: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  contentWrapper: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  filterHeader: {
    color: '#E9F0F2',
    fontSize: '18px',
  },
  inputChips: {
    width: '426px',
    height: '33px',
  },
  sliderField: {
    width: '426px',
    color: '#073947',
  },
  checkboxFiltersWrapper: {
    display: 'flex',
  },
  boardTilesWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  filterBtn: {
    marginTop: '20px',
    boxShadow: 'none',
    borderRadius: '3px',
    backgroundColor: '#073947',
    color: '#FFFFFF',
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 500,
    padding: '8px 15px',
    minWidth: '80px',
    '&:hover': {
      backgroundColor: '#073947',
      color: '#FFFFFF',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  tabSwitcher: {
    marginBottom: '40px',
    boxShadow: 'none',
    background: 'none',
    zIndex: 1,
  },
  tabs: {
    fontSize: '18px',
    color: '#073947',
    boxShadow: 'none',
    '&:focus': {
      outline: 'none',
    },
  },
  indicator: {
    color: '#073947',
  },

  createNowText: {
    color: '#073943',
    fontSize: '18px',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  btnsWrapper: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-around',
  },
});

export default useStyles;
