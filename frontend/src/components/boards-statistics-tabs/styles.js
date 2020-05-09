import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tab: {
    width: '100%',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
  },
  tabTitle: {
    padding: '20px 30px 0px 20px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
  },
  chartWrapper: {
    display: 'flex',
  },
});

export default useStyles;
