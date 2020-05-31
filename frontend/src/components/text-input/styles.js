import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  label: {
    marginBottom: 6,
    color: '#012934',
    fontSize: 13,
  },
  textarea: {
    resize: 'vertical',
    outline: 'none',
    boxShadow: 'none',
    padding: '9px 10px',
    fontSize: '13px',
    lineHeight: '18px',
    minHeight: '68px',
    backgroundColor: '#E9F0F2',
    maxHeight: '200px',
    borderRadius: 3,
    border: '1px solid #012934',
    '&:hover': {
      border: '1px solid #5F8792',
    },
    '&::placeholder': {
      color: '#012934',
    },
    '&:focus': {
      boxShadow: '0 0 3px 3px rgba(65, 183, 215, 0.35)',
      border: '1px solid #5F8792',
    },
  },
  error: {
    border: '1px solid #EB5757',
    '&:hover': {
      border: '1px solid #EB5757',
    },
    '&:focus': {
      boxShadow: 'none',
      border: '1px solid #EB5757',
    },
  },
});
