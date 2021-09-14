import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography,} from '@material-ui/core';
import {AccountCircleOutlined} from '@material-ui/icons';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    const handleLoginButtonClick = () => {
        console.log("Login button clicked...");
    }

    return (
      <>
         <AppBar className={classes.header} elevation={1}>
           <Toolbar>
               <Box>
                   <Typography variant="h5" color="primary">oOo</Typography>
               </Box>
               <Button className={classes.loginButton} color="primary" onClick={handleLoginButtonClick}  variant="contained">Sign In</Button>
           </Toolbar>
        </AppBar>
        <div className={classes.headerMargin}/>
      </>
    )
}

export default Header
