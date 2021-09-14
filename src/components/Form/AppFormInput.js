import React from 'react';
import {Grid, useTheme} from '@material-ui/core';
import {useFormikContext} from "formik";


import Input from '../common/Input/Input';


const AppFormInput = ({half, name, padding=true, label, ...rest}) => {
    const theme = useTheme();
    const {errors, touched, handleChange} = useFormikContext();
    
    return (
        <Grid item xs={half ? 6:12} style={{padding: padding ? theme.spacing(1) : 0}}>
            <Input 
                id={name}
                customLabel={label} 
                hiddenLabel={true} 
                fullWidth 
                onChange={handleChange(name)} 
                error={touched[name] && errors[name]} 
                {...rest}
            />
        </Grid>
    )
}

export default AppFormInput
