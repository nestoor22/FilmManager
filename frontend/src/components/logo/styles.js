import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    appLogo: {
        position: "absolute",
        display: "block",
        borderBottomLeftRadius: "150px",
        borderBottomRightRadius: "150px",
        width: "250px",
        height: "110px",
        left: "calc(50% - 250px/2)",
        top: "0",
        background: "#C4C4C4",
        color: "#000000",
        '&:hover': {
            color: "#343232",
            textDecorationLine: "None",
        }
    },
    logoTitle: {
        color: "#000000",
        marginTop: "10px",
        height: "69px",
        fontFamily: "Pridi",
        textAlign: "center",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "30px",
        lineHeight: "46px",
    }
}));