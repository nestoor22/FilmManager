import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  loaderWrapper: {
    zIndex: '1101',
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(205,206,212,0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
