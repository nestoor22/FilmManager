import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '0px 30px',
  },
  title: {
    color: '#254052',
    fontSize: '18px',
    fontWeight: 'bold',
    paddingBottom: '0px',
    paddingTop: '0px',
  },
  subheader: {
    fontSize: '15px',
    fontWeight: 'bold',
    height: '35px',
  },
  description: {
    fontSize: '15px',
    paddingBottom: '0px',
    paddingTop: '0px',
  },
  rateTitle: {
    color: '#005a81',
    fontWeight: 'bold',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  ratingsWrapper: {
    display: 'flex',
  },
  tabsRoot: {
    padding: 0,
    paddingLeft: '10px',
    justifyContent: 'flex-start',
  },
  customChip: {
    textTransform: 'capitalize',
    margin: '5px',
    border: '1px solid #E2EBF6',
    color: '#E9F0F2',
    backgroundColor: '#073947',
  },
  editIconWrapper: {
    marginLeft: '10px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export default useStyles;
