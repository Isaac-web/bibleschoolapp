import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import * as Yup from 'yup';

import AppFormInput from '../../components/Form/AppFormInput';
import AppForm from '../../components/Form/AppForm';
import SubmitButton from '../../components/Form/SubmitButton';
import useStyles from './styles';


const validationSchema = Yup.object().shape({
    firstname: Yup.string().min(3).max(50).required().label("First Name"),
    lastname: Yup.string().min(3).max(50).required().label("Last Name"),
    password: Yup.string().min(7).max(120).required().label("Password"),
    confirmPassword: Yup.string().min(7).max(120).required().label("Password Confirmation"),
    email: Yup.string().email().required().required().label("Email"),
    phone: Yup.string().min(3).max(15).label("Phone"),
    programOfStudy: Yup.string().min(3).max(150).label("Program Of Study"),   
});

const initialState = {
        firstname: "", 
        password: "", 
        confirmPassword: "",
        lastname: "", 
        email: "", 
        programOfStudy: ""
    }


const RegisterPage = () => {
    const classes = useStyles();


    return (
        <Grid container alignItems="center" direction="column">
            <Grid item className={classes.logoContainer}>
                <Typography variant="h4">oOo</Typography>
            </Grid>

            <AppForm
                initialValues={initialState}
                onSubmit={(data) => console.log(data)}
                validationSchema={validationSchema}
            >
                    <Container maxWidth="md">
                    <Grid item container justifyContent="center" >
                        <AppFormInput name="firstname" id="firstname" autoFocus  half label="First Name"/>
                        <AppFormInput name="lastname" id="lastname"  half label="Last Name"/>
                        <AppFormInput name="email" id="email" half label="Email"/>
                        <AppFormInput name="phone" id="phone" half label="Phone"/>
                        <AppFormInput name="programOfStudy" id="programOfStudy"  label="Program Of Study"/>
                        <AppFormInput name="password" id="password"  label="Password" type="password"/>
                        <AppFormInput name="confirmPassword" id="confirmPassword" label="Confirm Password" type="password"/>
                        <Grid item xs={12} className={classes.buttonWrapper}>
                            <SubmitButton>Sign Up</SubmitButton>
                            
                            <Grid container justifyContent="center">
                                <Typography variant="subtitle2" className={classes.signInText}>Already have an account? <span className={classes.signInSpanText}>Sign In</span></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </AppForm>
                
        </Grid>
    )
}

export default RegisterPage
