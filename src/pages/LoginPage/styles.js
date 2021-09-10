import {makeStyles} from "@material-ui/core/styles";
import colors from "../../config/colors";

export default makeStyles(theme => ({
    button: {
        textTransform: "none", 
        borderRadius: 8, 
        padding: 8
    },
    buttonsWrapper: {
        margin: "5px 8px"
    },
    container: {
        // minHeight: "100vh",
        // background: colors.backgroundLight
    },
    logo: {
        marginBottom: 10
    },
    paper: {
        padding: "50px 20px"
    },
    paperWrapper: {
        maxWidth: 480,
        marginTop: 80,
    },
    signUpText: {
        fontSize: 13,
        margin: "10px 0",
        color: theme.palette.grey[400]
    },
    signUpLink: {
        color: theme.palette.secondary.main,
        cursor: "pointer"
    },
    textContainer: {
        marginBottom: 50
    },
    welcomeText: {
        color: theme.palette.primary.light
    },
    welcomeSubText: {
        color: theme.palette.grey[400]
    }
}))