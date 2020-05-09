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
  },
  description: {
    fontSize: '18px',
    paddingBottom: '0px',
    paddingTop: '0px',
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
    color: '#fff',
    backgroundColor: '#005a81',
  },
});

export default useStyles;
