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
    width: '466px',
    backgroundColor: '#5F8792',
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
    color: '#012934',
  },
  checkboxFiltersWrapper: {
    display: 'flex',
  },
});

export default useStyles;
