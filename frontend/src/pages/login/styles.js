import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    loginFormWrapper: {
        marginTop: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginForm: {
        width: '1000px',
        backgroundColor: 'gray'
    }
});

export default useStyles;