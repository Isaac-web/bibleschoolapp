const currentModule = (module = null, action) => {
    switch(action.type) {
        case 'SET_CURRENT_MODULE':
            console.log(action.payload);
            return action.payload;

        case 'SET_BACKGROUND':
            module.background = action.payload;
            return module;
        case 'UPDATE_QUESTIONS':
            module.questions = action.payload
            return module;
        default: 
            return module;
    }
}

export default currentModule;