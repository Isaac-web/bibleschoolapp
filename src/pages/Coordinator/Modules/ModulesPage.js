import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";


import ModuleContainer from './ModuleContainer';
import ModuleDialog from './ModuleDialog';
import SideBar from "./SideBar";
import currentModuleActions from '../../../actions/currentModuleActions';

const list = [];
const Modules = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [currentModule, setCurrentModule] = useState(null);

    const handleOpenDialog = () => setOpen(true);
    const handleCloseDialog = () => setOpen(false);
    const handleSetCurrentModule = (module) => {
        dispatch(currentModuleActions.setCurrentModule(module));
    }

    return (
           <div>
                <Grid container direction="row">
                    <ModuleContainer currentModule={currentModule}/>
                    <SideBar list={list} onOpenDialog={handleOpenDialog} onSetCurrentModule={handleSetCurrentModule}/>
                    <ModuleDialog open={open} onClose={handleCloseDialog} onSetCurrentModule={handleSetCurrentModule}/>
                </Grid>
           </div>
    )
}

export default Modules
