import React from 'react';
import {Formik} from 'formik';


const AppForm = ({children, initialValues, onSubmit, validationSchema}) => 
<Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
>
    {() => <>
        {children}
    </>}
</Formik>


export default AppForm
