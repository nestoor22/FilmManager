import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        flexDirection: 'row',
        flex: '0 1 auto',
        height: 72,
        backgroundColor: '#5A0000',
        marginBottom: "50px"
    },
    navigation: {
        display: 'flex',
        justifyContent: "flex-end"
    },
    navigationItems: {
        padding: '0 0 0 30px',
        marginTop: '20px',
        marginRight: '20px',
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
    },
    navigationItem: {
        fontSize: '20px',
        fontWeight: "lighter",
        cursor: 'pointer',
        '&:not(:last-child)': {
            marginRight: 25
        }
    },
    navigationItemLink: {
        display: 'inline-block',
        color: '#000000'

    },
    activeNavigationLink: {
        color: '#071B27',
    }
}));
