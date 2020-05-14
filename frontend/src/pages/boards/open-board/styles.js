import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '36px',
    background: 'rgba(172,171,171,0.6)',
  },
  boardName: {
    paddingLeft: '20px',
    paddingRight: '20px',
    fontSize: '15px',
    fontWeight: 'bold',
  },
  lists: {
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
  },
  list: {
    width: '250px',
    height: 'fit-content',
    backgroundColor: '#cfdfea',
    margin: '10px',
    borderRadius: '3px'
  },
  listTitleWrapper: {
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  listItemsWrapper: {
    padding: '5px',
  },
  listTitle: {
    fontSize: '18px',
    paddingLeft: '20px',
    fontWeight: 'bold',
  },
  showRow: {
    height: '30px',
    position: 'relative',
    width: '100%',
    borderRadius: '3px',
    paddingRight: '10px',
    marginBottom: '5px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0a2b5c',
  },
  poster: {
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
    height: '30px',
    width: '20px',
  },
  showTitle: {
    paddingLeft: '20px',
    width: '200px',
    fontSize: '15px',
    color: '#fff',
  },
  releaseYear: {
    paddingLeft: '20px',
    color: '#fff',
  },
  addNewCard: {
    display: 'flex',
  },
  addNewIcon: {
    fill: '#717171',
    fontSize: '20px',
  },
  createNewButtonText: {
    paddingLeft: '15px',
  },
  createNewButton: {
    margin: '10px',
    height: '30px',
    background: 'rgba(0,0,0,.16)',
    '&:focus': {
      outline: 'none',
    },
  },
});

export default useStyles;
