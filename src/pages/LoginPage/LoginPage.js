import React from 'react'
import {Formik} from 'formik';
import {Lock, AccountCircle } from '@material-ui/icons'
import {Paper, Grid,  Typography, Box} from '@material-ui/core';
import * as Yup from 'yup';


import AppFormInput from '../../components/Form/AppFormInput';
import AppForm from '../../components/Form/AppForm';
import useStyles from './styles';
import SubmitButton from '../../components/Form/SubmitButton';



const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(7).required().label("Password"),
});


const LoginPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container justifyContent="center" alignItems="center" >
           <Grid item sm={5} xs={12} className={classes.paperWrapper}>
                <Box className={classes.logo}>
                    <Typography align="center" variant="h4">oOo</Typography>
                </Box>
               <Paper className={classes.paper} elevation={2}>
                   <AppForm
                    initialValues={{email: "", password: ""}}
                    onSubmit={data => console.log(data)}
                    validationSchema={validationSchema}
                   >
                        <Grid container>
                            <Grid item container justifyContent="center" className={classes.textContainer}>
                                <Typography variant="h5" className={classes.welcomeText}>Welcome Back</Typography>
                                <Typography variant="subtitle2" className={classes.welcomeSubText}>Enter your credentials to access your account</Typography>
                            </Grid>

                            <AppFormInput  autoFocus  startIcon={<AccountCircle size="small" color="primary" style={{marginLeft: -3, marginRight: 3}}/>} name="email" placeholder="Email" style={{marginBottom: 10}}/>
                            <AppFormInput  startIcon={<Lock size="small" color="primary" style={{marginLeft: -3, marginRight: 3}}/>} name="password" placeholder="Password" style={{marginBottom: 10}} type="password" />
                            <Grid item className={classes.buttonsWrapper} xs={12}>
                            <SubmitButton>Login</SubmitButton>

                            <Typography 
                                variant="subtitle2" 
                                align="center" 
                                className={classes.signUpText}>
                                    Don't have account? <span className={classes.signUpLink}>Sign Up here</span>
                            </Typography>
                        </Grid>
                        </Grid>
                            
                    
                   </AppForm>
                    
               </Paper>
           </Grid>
       </Grid>
        </div>
       
    )
}

export default LoginPage
