import React from 'react';

import {List, ListItem, ListItemText, ButtonBase} from "@material-ui/core";


import useStyles from './AppListItemStyles';

const AppListItem = ({ripple=false, subTitle, title, onClick}) => {
    const classes = useStyles();


    return (
            <ButtonBase className={classes.container} disableRipple={!ripple} onClick={onClick}>
                <ListItem divider>
                    <ListItemText primary={title} secondary={subTitle}/>
                </ListItem>
            </ButtonBase>
    )
}

export default AppListItem
