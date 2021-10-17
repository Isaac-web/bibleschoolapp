const setCurrentModule = (currentModule) => async dispatch => {
    dispatch({type: "SET_CURRENT_MODULE", payload: currentModule})
}


const setBackground = (image) => async dispatch => {
    dispatch({type: "SET_BACKGROUND", payload: image});
}


const updateQuestions = (questions) => async dispatch => {
    dispatch({type: "UPDATE_QUESTIONS", payload: questions});   
}


const saveChange = (module) => async dispatch => {
    dispatch({type: "UPDATE_QUESTIONS", payload: module});   
}


export default {
    setCurrentModule, 
    setBackground,
    updateQuestions
}


