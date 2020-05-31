import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: 6,
    color: '#071B27',
    fontSize: 13,
  },
  countryDropDown: {
    width: '200px',
    backgroundColor: '#E9F0F2',
    height: '35px',
    fontSize: 15,
    color: '#012934',
    fontFamily: 'Fira Sans',
    borderRadius: 3,
    lineHeight: '12px',
    border: '1px solid #012934',
    '&:hover': {
      border: '1px solid #5F8792',
    },
    '&:focus': {
      boxShadow: '0 0 3px 3px rgba(65, 183, 215, 0.35)',
      border: '1px solid #5F8792',
    },
  },
});
