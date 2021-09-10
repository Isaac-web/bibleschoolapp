import {makeStyles} from '@material-ui/core/styles';


export default makeStyles(theme => ({
    container: {
        border: `2px solid ${theme.palette.grey[100]}`,
        borderRadius: 8,
        padding: "5px 10px",
        transition: "120ms ease", 
        fontSize: 14,
        color: theme.palette.grey[600]
    }, 
    error: {
        color: theme.palette.error.main,
        fontSize: 11, 
    },
    focused: {
        border: `2px solid ${theme.palette.primary.light}`,
    },
    icon: {
        color: theme.palette.primary.light,
        fontSize: "small", 
        marginRight: 8,
        marginTop: 1,
    },
    label: {
        fontSize: 13, 
        marginLeft: 1,
        color: theme.palette.grey[600]
    }
}))