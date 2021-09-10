import React from 'react';
import {Grid} from '@material-ui/core';
import {useFormikContext} from "formik";

import AppInput from '../AppInput/AppInput';


const AppFormInput = ({half, name, padding=true, ...rest}) => {
    const {errors, touched, handleChange} = useFormikContext();
    return (
        <Grid item xs={half ? 6:12} style={{padding: padding ? 5 : 0}}>
            <AppInput onChange={handleChange(name)} error={touched[name] && errors[name]} {...rest}/>
        </Grid>
    )
}

export default AppFormInput
