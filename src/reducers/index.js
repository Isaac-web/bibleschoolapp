import {combineReducers} from 'redux';



const test = (state = {test: "It is working..."}, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}



export default combineReducers({test})