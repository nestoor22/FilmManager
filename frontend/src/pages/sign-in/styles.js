import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    body: {
        backgroundColor: "#FFFFFF",
    },
    root: {
        flexGrow: 1,
    },
    aboutUs: {
        padding: "25px",
        backgroundColor: "#1d1b1b",
    },
    signInFormContainer: {
        padding: "25px",
        backgroundColor: "#310000"
    },
    signInContainer: {
        marginTop: "15%"
    },
    formTitle: {
        color: "#C4C4C4",
        textAlign: "center"
    },
    aboutUsInfo: {
        lineHeight: "150%",
        color: "#FFFFFF",
        textAlign: "center",
    },
    input: {
        width: "100%",
    },
    textInput: {
        color: "#FFFFFF",
        borderRadius: "5px!important",
        paddingBottom: "15px"
    },
    btnSubmit: {
        color: "#FFFFFF!important",
        borderColor: "#FFFFFF!important",
        width: "100px",
        '&:active': {
            boxShadow: 'none!important',
            borderColor: '#FFFFFF!important',
        },
        '&:focus': {
            boxShadow: 'None!important',
            borderColor: "#FFFFFF!important",
        },
    }
}));
