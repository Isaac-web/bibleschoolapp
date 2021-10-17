import React, {useState, useEffect} from 'react';
import {Box, Button, Grid, IconButton, Paper, Typography, Container} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core/styles";
import { useSelector, useDispatch } from 'react-redux';

import ImagePicker from '../../../components/common/ImagePicker';
import QuestionDialog from './QuestionDialog'
import QuestionList from '../../../components/common/QuestionList';
import NoCurrentModule from './NoCurrentModule';
import currentModuleActions from '../../../actions/currentModuleActions';
import {Add, Save, Create} from '@material-ui/icons';




const ModuleContainer = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [questionList, setQuestionList] = useState([]);
    const [open, setOpen] = useState(false);
    const currentModule = useSelector(state => state.currentModule);


    const moduleQuestions = useSelector(state => state.currentModule?.questions);
    useEffect(() => {
        setQuestionList(moduleQuestions ? moduleQuestions : []);
    }, [])


    const handleImageChange = (file, base64) => {
        const module = {...currentModule};
        module.background = base64;
        dispatch(currentModuleActions.setBackground(base64));

    }
    const handleOpenQuestionDialog = () => setOpen(true);
    const handleCloseQuestionDialog = () => setOpen(false);   

    const handleAddQuestion = question => {
        questionList.push(question);
        dispatch(currentModuleActions.updateQuestions(questionList));
    }


    const handleSaveChanges = (module) => {
        console.log("Hello World...")
    }

    


    if(!currentModule) return <NoCurrentModule/>
    return (
        <div style={{flex: 0.76, padding: 10}}>
            <Paper className={classes.container}>
                <Box className={classes.banner} style={{backgroundImage: `url(${currentModule.background})`}}>
                    <ImagePicker className={classes.backgroundImageIcon} onChange={handleImageChange}>
                        <IconButton><Create/></IconButton>
                    </ImagePicker>
                    <Box className={classes.bannerTextContainer}>
                        <Typography variant="h4">{currentModule ? currentModule.title : ""}</Typography>
                        <Typography variant="h5">{currentModule ? currentModule.subTitle : ""}</Typography>
                    </Box>
                </Box>
                
                <Container className={classes.questionsContainer} maxWidth="sm" style={{padding: "20px 0"}}>
                    <Paper style={{padding: 10}}>
                        <QuestionList questions={questionList}/>
                    </Paper>
                    <Grid container justifyContent="center" className={classes.buttonsContainer}>
                        <Grid item>
                            <Button startIcon={<Add/>} className={classes.newQuestionButton} variant="outlined" color="primary" onClick={handleOpenQuestionDialog}>New Question</Button>
                        </Grid>
                        <Grid>
                            <Button endIcon={<Save/>}  className={classes.saveChangesButton} variant="contained" color="secondary" onClick={handleSaveChanges}>Save Changes</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <QuestionDialog open={open} onClose={handleCloseQuestionDialog} onNewQuestion={handleAddQuestion}/>
        </div>


    
    )
}

export default ModuleContainer












const useStyles = makeStyles(theme => ({
    container: {
        flex: 1,        
    }, 
    backgroundImage: {
        width: "100%",
        height: "inherit",
    },
    banner: {
        backgroundImage: "linear-gradient(100deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))",
        backgroundSize: "cover",
        backgroundPosition: "center center",        
        height: "35vh",   
        position: "relative", 
        overflow: "hidden"
    },
    bannerTextContainer: {
        position: "absolute",
        bottom: 10, 
        left: 10, 
        color: "white",
    }, 
    backgroundImageIcon: {
        position: "absolute",
        top: 10, 
        right: 10, 
    },
    buttonsContainer: {
        padding: "3em",
    },
    newQuestionButton: {
        textTransform: "none",
        margin: 10
    }, 
    saveChangesButton: {
        textTransform: "none",
        margin: 10
    }, 
    questionsContainer: {
        display: "flex",
        "flexDirection": "column"
    }


    
}))
