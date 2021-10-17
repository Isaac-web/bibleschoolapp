import React from 'react';
import {Box, Typography} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles';

import noCurrentModuleIcon from '../../../assets/NoModulesSelected.png'


const NoCurrentModule = () => {
    const classes = useStyles();


    return (
        <Box className={classes.container}>
            <img className={classes.image} src={noCurrentModuleIcon}/>
            <Box className={classes.textContainer}>
                <Typography variant="h4" align="center">No Module Selected Yet</Typography>
                <Typography variant="body2" align="center">Select a module by clicking on it.</Typography>
            </Box>
        </Box>
    )
}



const useStyles = makeStyles(theme => ({
    container: {
        display: "flex", 
        flex: 0.75,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingTop: "7em"
    }, 
    image: {
        width: "13em",
        height: "13em",
    },
    textContainer: {
        padding: "2em 0"
    }
}))

export default NoCurrentModule;
