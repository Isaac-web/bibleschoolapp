import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({
    buttonWrapper: {
        padding: "15px 5px",
        // marginTop: 20
    }, 
    logoContainer: {
        marginBottom: 30
    },
    signInText: {
        color: theme.palette.grey[500], 
        margin: "30px 0"
    },
    signInSpanText: {
        color: theme.palette.secondary.main,
        cursor: "pointer"
    }
}))