import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: 6,
    color: '#071B27',
    textTransform: 'uppercase',
    fontSize: 10,
    lineHeight: '12px',
    letterSpacing: '0.035em',
  },
  countryDropDown: {
    width: '255px',
    backgroundColor: '#fff',
    height: '35px',
    fontSize: 13,
    fontFamily: 'Fira Sans',
    borderRadius: 3,
    lineHeight: '12px',
    border: '1px solid #BECEDA',
    '&:hover': {
      border: '1px solid #41B7D7',
    },
    '&:focus': {
      boxShadow: '0 0 3px 3px rgba(65, 183, 215, 0.35)',
      border: '1px solid #41B7D7',
    },
  },
});
