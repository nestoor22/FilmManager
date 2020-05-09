import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: 52,
    backgroundColor: '#fff',
    boxShadow: '0px 1px 0px #E2EBF6',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 115,
  },
  navigation: {
    display: 'flex',
    paddingRight: '20px',
  },
  navigationItems: {
    padding: '0',
    margin: '0',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  navigationItem: {
    fontSize: '13px',
    cursor: 'pointer',
    '&:not(:last-child)': {
      marginRight: 25,
    },
  },
  navigationItemLink: {
    display: 'inline-block',
    color: '#335267',
    '&:hover': {
      color: '#071B27',
      textDecoration: 'none',
    },
  },
  activeNavigationLink: {
    color: '#071B27',
    fontWeight: 'bold',
  },
  button: {
    color: '#335267 !important',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      backgroundColor: '#fff !important',
      textDecoration: 'none',
    },
  },
  menuItem: {
    color: '#335267 !important',
  },
});

export default useStyles;
