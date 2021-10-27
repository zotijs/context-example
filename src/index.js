import React from 'react';
import ReactDOM from 'react-dom';
import { createEpicMiddleware } from 'redux-observable';
import { App } from 'components';
import reportWebVitals from './reportWebVitals';

import {
    StoreProvider,
    combineReducers,
    createStore,
    applyMiddleware,
    rootEpic,
    compose,
} from 'utils';

import { logger } from 'utils/middlewares';

import { reducer as header, epics as headerEpic } from 'models/header';

// TODO: move store creation to a configStore.js file
const initialState = { header: { checked: false } };

const rootReducer = combineReducers({ header });

const epics = rootEpic(headerEpic);

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(logger, epicMiddleware))
);

epicMiddleware.run(epics);

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
