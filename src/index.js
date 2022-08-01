import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.scss"
import App from './App';
import {store} from './feauter/Store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <App />
    </Provider>
);
