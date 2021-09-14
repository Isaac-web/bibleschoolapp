import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        height: 50,
        maxHeight: "auto",
        marginTop: 3,
        border: `2px solid ${theme.palette.grey[200]}`,
        borderRadius: 10,
        overflow: "hidden",
        color: theme.palette.grey[600],
        fontSize: 15,
        backgroundColor: theme.palette.common.white,
        transition: theme.transitions.create(["border-color"]),
        "&:hover": {
            border: `2px solid ${theme.palette.grey[300]}`,      
            backgroundColor: theme.palette.common.white,
        },
        "&$focused": {
            border: `2px solid ${theme.palette.primary.main}`,      
            backgroundColor: theme.palette.common.white,
        },
        "&$focused:hover": {
            border: `2px solid ${theme.palette.primary.light}`,      
            backgroundColor: theme.palette.common.white,
        },
        },
    focused: {}
}))