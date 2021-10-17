import React from 'react';
import {Grid, Button} from "@material-ui/core";
import {useFormikContext} from 'formik';

import {makeStyles} from '@material-ui/core/styles';

const SubmitButton = ({children, customStyle, fullWidth,  ...rest}) => {
    const classes = useStyles();
    const {handleSubmit} = useFormikContext();


    return (
        <Grid item xs={fullWidth && 12} className={classes.buttonWrapper}>
            <Button 
                className={`${classes.SubmitButton} ${customStyle}`}  
                onClick={handleSubmit} 
                type="submit" 
                fullWidth={fullWidth}
                {...rest}
            >
                {children}
            </Button>
        </Grid>
    )
}

export default SubmitButton


const useStyles = makeStyles(theme => ({
    SubmitButton: {
        borderRadius: 8,
        padding: 8,
        textTransform: "none"
    }
}))
