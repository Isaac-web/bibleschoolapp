import React from 'react';
import {TextField} from '@material-ui/core';


import useStyles from './styles';

const Search = ({value, onSearch, ...rest}) => {
    const classes = useStyles();

    const raiseSearch = ({target:input}) => {
        if(typeof onSearch !== "function") 
            return console.error("onSearch is not a function.");
        onSearch(input.value.trim().toLowerCase());
    }


    return (
        <TextField 
            variant="filled" 
            placeholder="Search..."
            fullWidth
            hiddenLabel 
            value={value} 
            InputProps={{disableUnderline: true, classes: classes}}
            onChange={raiseSearch}
        />
    )
}

export default Search
