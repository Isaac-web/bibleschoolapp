import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@material-ui/styles';
import {compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';


import App from './App';
import {theme} from './config';
import reducer from './reducers';




const store = createStore(reducer, compose(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Router>
    </Provider>
    ,
    document.getElementById("root")
    );