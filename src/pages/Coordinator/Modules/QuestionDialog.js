import React, {useState} from 'react';
import {Box, Button, DialogActions, DialogContent} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import AppDialog from '../../../components/Dialog/AppDialog';
import Input from '../../../components/common/Input/Input';

const QuestionDialog = ({open, onClose, onNewQuestion}) => {
    const classes = useStyles()
    const [data, setData] = useState({question: "", possibleAnswers: ""});



    const handleSubmit = (e) => {
        e.preventDefault();

        const validQuestion = data.question.trim().length > 3;
        const validPossibleAnswers = data.possibleAnswers.trim().length > 3;

        if(!validQuestion || !validPossibleAnswers) return;
        
        const possibleAnswers = data.possibleAnswers.split(", ");
        const questionObject = {
            question: data.question, 
            possibleAnswers, 
            answer: {text: "", index: undefined}
        }
        onNewQuestion(questionObject);

        clearDialog();
    }



    const handleChange = ({target: input}) => {
        setData({...data, [input.name]: input.value})
    }

    const clearDialog = () => {
        setData({question: "", possibleAnswers: ""})
        onClose();
    }


    return (
       <AppDialog title="Add A New Question" open={open} onClose={onClose} maxWidth="sm" fullWidth>
           <form onSubmit={handleSubmit}>
            <DialogContent>
                <Box className={classes.inputWrapper}>
                    <Input autoFocus name="question" placeholder="Question..." value={data.question} onChange={handleChange} fullWidth/>  
                </Box>

                <Box className={classes.inputWrapper}>
                    <Input name="possibleAnswers" placeholder="Possible Answers (Comma separated)" value={data.possibleAnswers} onChange={handleChange} fullWidth/>  
                </Box>
            </DialogContent>
            <DialogActions>
                    <Button size="small" onClick={clearDialog}>Cancel</Button>
                    <Button size="small" type="submit" variant="contained" color="primary">OK</Button>
            </DialogActions>
           </form>
       </AppDialog>
    )
}





const useStyles = makeStyles(theme => ({
    inputWrapper: {
        padding: "20px 0"
    }
}))

export default QuestionDialog
