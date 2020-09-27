import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  toolbar: {
    display: 'flex',
    paddingTop: '80px',
    marginLeft: '150px',
    justifyContent: 'center',
    boxSizing: 'border-box',
    alignItems: 'center',
    minHeight: '48px',
  },
  selected: {
    fontWeight: 'bold',
  },
  indicator: {
    backgroundColor: 'white',
  },
  customTabRoot: {
    padding: '18px 30px',
    width: '180px',
    borderBottom: '1px solid #E2EBF6',
    boxSizing: 'border-box',
    fontSize: '20px',
    '&:focus': {
      outline: 'none',
    },
  },
  buttonRoot: {
    fontSize: '13px',
    fontWeight: 'bold',
    padding: '3px 20px',
    marginLeft: '10px',
  },
  tabsRoot: {
    flex: '1 1 auto',
    display: 'flex',
    width: '100%',
  },
  tabs: {
    flex: '0 1 220px',
  },
  customTabWrapper: {
    alignItems: 'center',
  },
  tabItemTitle: {
    fontWeight: 'bold',
    lineHeight: '18px',
    marginBottom: 12,
    color: 'inherit',
  },
  tabContentWrapper: {
    padding: '0',
  },
  textColorInheritCustom: {
    opacity: 1,
    color: '#E2F5F8',
  },
  contentRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
    justifyContent: 'center',
    width: '100%',
  },
  sliderWrapper: {
    width: '90%',
    marginBottom: '40px'
  },
  sliderTitle: {
    fontSize: '36px',
    color: '#E9F0F2'
  },
  redirectSliderTitle: {
    fontSize: '36px',
    width: 'fit-content',
    color: '#E9F0F2',
    borderBottom: '1px solid #012934',
    '&:hover': {
      cursor: 'pointer'
    },
  },
  filterListRoot: {
    width: '250px',
    height: 'fit-content',
    padding: '40px 10px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  select: {
    width: '250px',
    '&:after': {
      backgroundColor: '#fff',
      height: '2px',
    },
    '&:before': {
      height: '2px',
      backgroundColor: '#fff',
    },
  },
});

export default useStyles;
