import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  label: {
    marginBottom: '6px',
    textTransform: 'uppercase',
  },
  defaultZone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '204px',
    backgroundColor: '#fff',
    border: '1.5px dashed #beceda',
    borderRadius: '3px',
    boxSizing: 'border-box',
    position: 'relative',
  },
  imageZone: {
    border: '1px solid #BECEDA',
  },
  content: {
    textAlign: 'center',
  },
  imageIcon: {
    color: '#335267',
    opacity: '0.7',
    fontSize: '46px',
    marginBottom: '3px',
  },
  description: {
    color: '#335267',
    maxWidth: '160px',
    lineHeight: '18px',
  },
  browseWord: {
    color: '#008db0',
    textDecoration: 'underline',
    fontWeight: '600',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  input: {
    display: 'none',
  },
  imageBlock: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  editBtn: {
    color: 'white',
    background: '#464646',
    fontSize: '16px',
    padding: '4px',
    cursor: 'pointer',
  },
  editBtnLabel: {
    height: '24px',
  },
  drag: {
    width: '100%',
    height: '100%',
    backgroundColor: '#C6DBE0',
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  error: {
    border: '1px solid #EB5757',
  },
  errorMsg: {
    marginBottom: '30px',
  },
  loaderWrapper: {
    backgroundColor: '#F7F7F7',
  },
});
