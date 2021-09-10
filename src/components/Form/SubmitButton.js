import React from 'react';
import {Grid, Button} from "@material-ui/core";
import {useFormikContext} from 'formik';

import {makeStyles} from '@material-ui/core/styles';

const SubmitButton = ({children, customStyle}) => {
    const classes = useStyles();
    const {handleSubmit} = useFormikContext();

    return (
        <Grid item xs={12} className={classes.buttonWrapper}>
            <Button 
                className={`${classes.SubmitButton} ${customStyle}`} 
                color="primary" 
                fullWidth 
                onClick={handleSubmit} 
                type="submit" 
                variant="contained"
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
