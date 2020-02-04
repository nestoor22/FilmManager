import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundColor: theme.palette.primary.main,
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formBox: {
        backgroundColor: theme.palette.secondary.main
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    about: {
        color: theme.palette.secondary.main,
        display: 'flex',
        marginTop: theme.spacing(13),
        flexDirection: 'column',
        alignItems: 'center',
    },
    info: {
        width: '70%',
        textAlign: 'center',
        marginTop: theme.spacing(3),
    }
}));

export default useStyles;