import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  paper: {
    backgroundColor: '#FFF',
    border: '1px solid #254052',
    boxSizing: 'border-box',
    borderRadius: '3px',
    minWidth: '400px',
    maxWidth: '600px',
  },
  contentRoot: {
    padding: '12px 30px',
  },
  contentTextRoot: {
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 'normal',
    color: '#000',
    padding: '0',
    margin: '0',
  },
  title: {
    fontSize: '15px',
    fontWeight: '600',
    lineHeight: '18px',
    color: '#000',
    padding: '35px 30px 0',
  },
  actionsRoot: {
    borderTop: '1px solid #E5E5E5',
    marginTop: '20px',
    padding: '12px 30px',
  },
  cancelBtnRoot: {
    border: '1px solid #0e8bb4',
    borderRadius: '3px',
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 500,
    color: '#254052',
    padding: '8px 15px',
    minWidth: '70px',
    marginRight: '7px',
    '&:focus': {
      outline: 'none',
    },
  },

  actionBtnRoot: {
    boxShadow: 'none',
    border: '1px solid #0e8bb4',
    borderRadius: '3px',
    backgroundColor: '#254052',
    color: '#FFFFFF',
    fontSize: '13px',
    lineHeight: '18px',
    fontWeight: 500,
    padding: '8px 15px',
    minWidth: '70px',
    '&:hover': {
      backgroundColor: '#254052',
      color: '#FFFFFF',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  closeBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '10px',
  },
  closeIcon: {
    fontSize: '17px',
    color: '#000',
  },
});
