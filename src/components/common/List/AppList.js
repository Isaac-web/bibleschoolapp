import React from 'react';
import {List} from '@material-ui/core';



import AppListItem from './AppListItem';
import useStyles from './AppListStyle';



const AppList = ({data, onItemClick}) => {
    const classes = useStyles();

    const raiseClick = (item) => {
        if(typeof onItemClick !== "function") 
            return console.error("onItemClick is not a function");
            
        onItemClick(item);
    }
    return (
       <List className={classes.container}>
           {data.map(item => <AppListItem onClick={() => raiseClick(item)} key={item._id} title={item.title} subTitle={item.subTitle} ripple/>)}
       </List>
    )
}

export default AppList
