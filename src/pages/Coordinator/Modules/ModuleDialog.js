import React, {useState} from 'react';
import {Button, DialogContent, DialogActions} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';


import AppDialog from '../../../components/Dialog/AppDialog'
import AppForm from '../../../components/Form/AppForm'
import AppFormInput from '../../../components/Form/AppFormInput'
import SubmitButton from '../../../components/Form/SubmitButton'
import modules from '../../../actions/modules';
import ImagePicker from '../../../components/common/ImagePicker';



const validationSchema = Yup.object().shape({
    title: Yup.string().min(3).max(100).required().label("Name of Modlue"),
    subTitle: Yup.string().min(3).max(100).required().label("Title")
});




const ModuleDialog = ({open, onClose, onSetCurrentModule}) => {
    const dispatch = useDispatch();
    const [background, setBackground] = useState(null);


    const clear = () => {
        onClose();
    }
    

    const handleCreateModule = (data) => {
        const _id = Date.parse(new Date).toString();
        dispatch(modules.createModule({...data, _id, background}, onSetCurrentModule));
        clear();
    }

  
    const handleSetImage = (image, base64) => setBackground(base64)
  

    return (
        <AppDialog 
            open={open} 
            title="Add Module" 
            maxWidth="sm" 
            fullWidth 
            onClose={onClose}
        >
            <AppForm
                initialValues={{title: "", subTitle: ""}}
                onSubmit={handleCreateModule}
                validationSchema={validationSchema}
            >
                <DialogContent>
                    <AppFormInput autoFocus name="title" label="Name"/>
                    <AppFormInput name="subTitle" label="Title"/>
                    <ImagePicker onChange={handleSetImage}/>
                </DialogContent>
                <DialogActions style={{padding: "15px 30px"}}>
                    <Button style={{width: 100, textTransform: "none"}} onClick={clear}>Cancel</Button>
                    <SubmitButton variant="contained" color="primary" style={{width: 100, textTransform: "none"}}>Save</SubmitButton>
                </DialogActions>
            </AppForm>
        </AppDialog>
    )
}

export default ModuleDialog
