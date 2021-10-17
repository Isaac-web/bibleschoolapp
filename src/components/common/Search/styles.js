import {makeStyles} from '@material-ui/core/styles';


export default makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.grey[150],
        borderRadius: 12,
        fontSize: 16,
        color: theme.palette.grey[600],
        height: 42,
        "&$focused": {
            backgroundColor: theme.palette.grey[200],
        }, 
        "&:hover": {
            backgroundColor: theme.palette.grey[200],
        },
    },
    focused: {}
}))