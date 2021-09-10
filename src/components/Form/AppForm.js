import React from 'react';
import {Formik} from 'formik';


const AppForm = ({children, initialValues, onSubmit, validateYupSchema}) => 
<Formik
    initialValues={initialValues}
    validationSchema={validateYupSchema}
    onSubmit={onSubmit}
>
    {() => <>
        {children}
    </>}
</Formik>


export default AppForm
