import {combineReducers} from 'redux';
import modules from './modules';
import currentModule from './currentModule';



export default combineReducers({modules, currentModule});