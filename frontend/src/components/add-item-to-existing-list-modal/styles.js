import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  closeBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '10px',
    '&:focus': {
      outline: 'none',
    },
  },
  paper: {
    width: '450px',
    height: '650px',
    top: '-120px',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#C2C2C2',
      borderRadius: '2px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#073947',
      opacity: 0.48,
      borderRadius: '2px',
    },
  },
  closeIcon: {
    fontSize: '17px',
    color: '#E9F0F2',
  },
  title: {
    backgroundColor: '#073947',
    color: '#E9F0F2',
    padding: '5px',
    paddingLeft: '15px',
  },
  detailsRoot: {
    padding: 0,
  },
  summaryRoot: {
    '&.Mui-expanded': {
      minHeight: '20px',
    },
  },
  summaryContent: {
    '&.Mui-expanded': {
      margin: 0,
    },
  },
  boardName: {
    fontSize: '17px',
    fontWeight: 'bold',
    color: '#073947',
  },
  listRoot: {
    width: '100%',
  },
  listName: {
    color: '#073947',
    paddingLeft: '36px',
    '&:hover': {
      backgroundColor: '#E9F0F2',
      cursor: 'pointer',
    },
  },
  boardsBlockTitle: {
    fontSize: '15px',
    color: '#073947',
    paddingLeft: '10px',
    marginBottom: '5px',
    borderBottom: '1px solid #BAC7CB',
  },
});

export default useStyles;
