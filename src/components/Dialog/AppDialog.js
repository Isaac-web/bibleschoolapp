import React from 'react';
import {Dialog,  DialogTitle} from "@material-ui/core";

const AppDialog = ({children, open, fullWidth, maxWidth, title, onClose}) => {
        


    return (
            <Dialog 
                open={open}
                onClose={onClose}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
            >
                <DialogTitle>{title}</DialogTitle>
               {children}
            </Dialog>
    )
}

export default AppDialog
