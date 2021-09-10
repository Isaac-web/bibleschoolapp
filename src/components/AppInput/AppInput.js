import React from 'react';
import {InputBase, Typography} from '@material-ui/core';

import useStyles from './styles';

const AppInput = ({error, icon, id, label, name, ...rest}) => {
    const classes = useStyles();
    return (
        <div>
          {label && <label htmlFor="this_id">
                <Typography className={classes.label}>{label}</Typography>
            </label>}
            <InputBase
                id={id}
                className={classes.container}
                classes={{focused: classes.focused}}
                fullWidth   
                startAdornment={icon && <span className={classes.icon}>{icon}</span>}
                {...rest}             
            />
            {error && <Typography className={classes.error}>{error}</Typography>}
        </div>
    )
}

export default AppInput
