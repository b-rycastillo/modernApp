import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import { configureStore } from './store.js';

ReactDOM.render(
    <Provider store={ configureStore() } >
        <App/>
    </Provider>, 
    document.getElementById('root'),
);