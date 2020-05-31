import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: 6,
    color: '#012934',
    fontSize: 13,
  },
  inputRoot: {
    borderRadius: 3,
    border: '1px solid #012934',
    '&:hover': {
      border: '1px solid #5F8792',
    },
  },
  inputRootFocused: {
    boxShadow: '0 0 3px 3px rgba(65, 183, 215, 0.35)',
    border: '1px solid #5F8792',
  },
  error: {
    boxShadow: 'none',
    border: '1px solid #012934',
    '&:hover': {
      border: '1px solid #5F8792',
    },
  },
  input: {
    padding: '9px 10px',
    fontSize: 13,
    lineHeight: 18,
  },
  disabledInput: {
    backgroundColor: '#e2ebf6',
    color: '#59758b',
  },
  disabledLabel: {
    color: '#071B27 !important',
  },
});
