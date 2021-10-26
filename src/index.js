import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import reportWebVitals from './reportWebVitals';

import {
    StoreProvider,
    combineReducers,
    createStore,
    applyMiddleware,
} from 'utils/store';

import { logger } from 'utils/middlewares';

import { reducer as header } from 'models/header';

const initialState = { header: { checked: false } };

const rootReducer = combineReducers({ header });

const store = createStore(rootReducer, initialState, applyMiddleware(logger));

ReactDOM.render(
    <StoreProvider value={store}>
        <App />
    </StoreProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
