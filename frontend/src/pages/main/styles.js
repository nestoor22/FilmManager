import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    toolbar: {
        display: 'flex',
        paddingTop: '80px',
        justifyContent: 'center',
        boxSizing: 'border-box',
        alignItems: 'center',
        minHeight: '48px'
    },
    selected: {
        fontWeight: 'bold',
    },
    indicator: {
        backgroundColor: 'white',
    },
    customTabRoot: {
        padding: '18px 30px',
        borderBottom: '1px solid #E2EBF6',
        boxSizing: 'border-box',
        fontSize: '15px',
        '&:focus': {
            outline: 'none',
        },
    },
    buttonRoot: {
        fontSize: '13px',
        fontWeight: 'bold',
        padding: '3px 20px',
        marginLeft: '10px'
    },
    tabsRoot: {
        flex: '1 1 auto',
        display: 'flex'
    },
    tabs: {
        flex: '0 1 220px'
    },
    customTabWrapper: {
        alignItems: 'center'
    },
    tabItemTitle: {
        fontWeight: 'bold',
        lineHeight: '18px',
        marginBottom: 12,
        color: 'inherit'
    },
    tabContentWrapper: {
        padding: '24px 20px 22px 20px'
    },
    textColorInheritCustom: {
        opacity: 1,
        color: '#E2F5F8',
    }
});

export default useStyles;