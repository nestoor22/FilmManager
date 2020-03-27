import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    logo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        color: '#071B27',
        height: 100,
        width: 150,
        backgroundColor: '#fff',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0,
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%'
    }
});

export default useStyles;