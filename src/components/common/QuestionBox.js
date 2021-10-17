import React from 'react'
import {Box, Typography, RadioGroup, Radio, FormControlLabel} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"


const QuestionBox = ({question, possibleAnswers, onAnswerSelect}) => {
    
    const classes = useStyles();
    
    const raiseAnswerSelect = ({target: radio}) => onAnswerSelect(radio.value);
    
    return (
        <Box className={classes.container}>
            <Typography variant="body1">{question}</Typography>
            <RadioGroup>
                {possibleAnswers.map(a => <FormControlLabel label={a} onChange={raiseAnswerSelect} control={<Radio value={a}/>}/>)}
            </RadioGroup>
        </Box>
    )
}





const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.02)", 
        padding: 10,
        borderRadius: 12
    }
}))








export default QuestionBox
