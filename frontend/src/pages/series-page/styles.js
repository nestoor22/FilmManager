import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  sortByWrapper: {
    height: '32px',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#073947',
    borderRadius: '1px',
    marginTop: '60px',
    marginBottom: '30px',
    justifyContent: 'space-between',
  },
  sortByTitle: {
    color: '#BAC7CB',
    fontSize: '13px',
    width: '92px',
    textAlign: 'center',
  },
  sortingTitle: {
    color: '#BAC7CB',
    fontSize: '13px',
    marginRight: '5px',
  },
  defaultSortingWrapper: {
    width: '70px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  nameSortingWrapper: {
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  imdbSortingWrapper: {
    width: '90px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  ratingSortingWrapper: {
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  dateSortingWrapper: {
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  popularitySortingWrapper: {
    width: '110px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  contentRoot: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default useStyles;
