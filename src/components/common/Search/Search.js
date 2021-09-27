import React from 'react';
import {TextField} from '@material-ui/core';


import useStyles from './styles';

const Search = ({value, onSearch}) => {
    const classes = useStyles();
    return (
        <TextField 
            variant="filled" 
            placeholder="Search..."
            fullWidth
            hiddenLabel 
            value={value} 
            InputProps={{disableUnderline: true, classes: classes}}
            onChange={({target:input}) => onSearch(input.value)}
        />
    )
}

export default Search
