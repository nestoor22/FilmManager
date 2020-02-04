import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#330202'
        },
        secondary: {
            main: '#C4C4C4'
        },
        error: {
            main: '#EB5757'
        }
    },
    typography: {
        fontFamily: 'Fira Sans',
        h1: {
            fontSize: 48,
            fontWeight: 500
        },
        h2: {
            fontSize: 36,
            fontWeight: 500
        },
        h3: {
            fontSize: 18,
            fontWeight: 500
        },
        body1: {
            fontSize: 13
        },
        body2: {
            fontSize: 11,
            fontWeight: 500
        },
        button: {
            textTransform: 'capitalize',
            fontWeight: 500
        }
    }
});

export default theme;
