import { makeStyles } from '@material-ui/core/styles';

export const autocompleteStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    borderRadius: '3px',
    border: '1px solid #BECEDA',
    '&:hover': {
      border: '1px solid #41B7D7',
    },
  },
  focused: {
    backgroundColor: 'white',
    boxShadow: '0 0 3px 3px rgba(65, 183, 215, 0.35)',
    border: '1px solid #41B7D7',
  },
  inputRoot: {
    outline: 'none',
    boxShadow: 'none',
    backgroundColor: 'white !important',
    padding: '0 !important',
    border: '0',
    borderRadius: '3px',
    '&:before': {
      border: 0,
    },
    '&:after': {
      border: 0,
    },
    '&:hover': {
      border: '0',
      backgroundColor: 'white',
      '&:before': {
        border: 0,
      },
    },
  },
  input: {
    backgroundColor: 'white',
    borderRadius: '3px',
    padding: '9px 10px !important',
    fontSize: '13px',
    lineHeight: '18px',
    border: '0',
  },
  endAdornment: {
    display: 'none',
  },
  tag: {
    height: '28px',
    border: 'none',
    borderRadius: '3px',
    backgroundColor: '#005a81',
    fontSize: '13px',
    lineHeight: '18px',
    color: '#FFF',
    padding: '6px 10px',
  },
});

export const chipStyles = makeStyles({
  label: {
    padding: '0 9px 0 0',
  },
  deleteIcon: {
    marginRight: '0 !important',
  },
});

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  label: {
    marginBottom: 6,
    color: '#071B27',
    textTransform: 'uppercase',
    fontSize: 10,
    lineHeight: '12px',
    letterSpacing: '0.035em',
  },
  closeIcon: {
    display: 'none',
  },
  deleteChipIcon: {
    width: '14px',
    height: '14px',
    color: '#fff',
  },
  error: {
    border: '1px solid #EB5757',
    '&:hover': {
      border: '1px solid #EB5757',
    },
  },
  paper: {
    backgroundColor: '#FFF',
    boxShadow: '0.5px 1px 8px rgba(0,0,0,0.1)',
    borderRadius: '4px',
  },
  showRow: {
    height: '30px',
    position: 'relative',
    width: '100%',
    borderRadius: '3px',
    paddingRight: '10px',
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
    width: '100%',
    fontSize: '15px',
    color: '#fff',
  },
});
