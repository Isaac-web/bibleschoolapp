import React, {useState} from 'react';
import {IconButton, Menu, MenuItem} from '@material-ui/core';


const AppMenu = ({id, IconComponent, menuItems, selectedItem, onItemSelect }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    
    const handleOpen = ({currentTarget}) => {
        setAnchorEl(currentTarget);
        setOpen(true);
    }

   

    const handleClose = (option) => {
        setAnchorEl(null);
        setOpen(false);
        onItemSelect(option);
    }


    return (
        <>  
            <IconButton
              onClick={handleOpen}
              aria-label={anchorEl ? id:undefined}
              aria-haspopup={anchorEl ? true : false}
            >
                {IconComponent}
            </IconButton>

        <Menu 
           id={id}
           anchorEl={anchorEl}
           open={open}
           keepMounted={true}
           onClose={handleClose}
        >
            {
                menuItems.map(item => <MenuItem key={item.label} onClick={() => handleClose(item.option)}>{item.label}</MenuItem>)
            }
        </Menu>
        </>
    )
}

export default AppMenu
