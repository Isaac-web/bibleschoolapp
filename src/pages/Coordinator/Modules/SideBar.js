import React, {useState} from 'react';
import {Box, Paper, Fab, Typography} from "@material-ui/core";
import {Add} from '@material-ui/icons';
import {useSelector} from "react-redux";


import useStyles from './styles';
import AppList from '../../../components/common/List/AppList';
import noModulesIcon from "../../../assets/NoModulesIcon.png";
import Search from '../../../components/common/Search/Search';


const SideBar = ({onOpenDialog, onSetCurrentModule}) => {
    const NoModules = () => {
        return <Box 
                style={{display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center", 
                        flexDirection: "column", 
                        paddingTop: "10em"
                    }}
                >
                <img style={{width: "7em", height: "7em"}} src={noModulesIcon}/>
                <Typography variant="h5" align="center">No Module Yet.</Typography>
                <Typography variant="body2" align="center">Click the Add button to add a new module.</Typography>
        </Box>
    }


    const mapToViewModel = (data) => {
        return data.map(d => d);
    }


    const classes = useStyles();
    const list = useSelector(state => mapToViewModel(state.modules));
    const [searchResult, setSearchResults] = useState([])



    const handleSearch = (data) => {
        setSearchResults((list.filter(item => item.title.toLowerCase() === data)));
    }


    
    return ( 
            <div style={{padding: 10, width: "23%", position: "fixed", right: 0}}>
                <Paper className={classes.sidebar}>
                    <Box className={classes.listContainer}>
                        {!list.length ? 
                            <NoModules/>: 
                            <div style={{position: "relative"}}>  
                                <div style={{position: "abolute", boxSizing: "border-box", top: 0, padding: 10, zIndex: 1000 }}>
                                    <Search onSearch={handleSearch}/>
                                </div>
                                <AppList data={list} onItemClick={(data) => onSetCurrentModule(data)}/>
                            </div>
                            }
                    </Box>
                    <Fab className={classes.addModuleButton} onClick={onOpenDialog}>
                        <Add color="primary"/>
                    </Fab>
                </Paper>
            </div>
    )
}

export default SideBar