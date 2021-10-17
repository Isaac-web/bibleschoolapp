import React from 'react';
import {TextField, InputLabel} from '@material-ui/core';

import useStyles from './styles';

const Input = ({customLabel, error, id, startIcon, ...rest}) => {
    const classes = useStyles();

    return (
        <>  
            <InputLabel style={{fontSize: 13}} htmlFor={id}>{customLabel}</InputLabel>
            <TextField 
                id={id}
                className={classes.container}
                helperText={error}
                hiddenLabel
                error={error ? true: false}
                InputProps={{
                    classes, 
                    disableUnderline: true,
                    startAdornment: <>{startIcon}</>
                }}
                variant="filled"
                {...rest}
            />
        </>
    )
}

export default Input
