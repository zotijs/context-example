import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import reportWebVitals from './reportWebVitals';

import { createStore, StoreProvider, combineReducers } from 'utils';
import { reducer as header } from 'models/header';

const initialState = { header: { checked: false } };

const rootReducer = combineReducers({ header });
const StoreContext = createStore(initialState);

const options = {
    reducer: rootReducer,
    initialState,
    StoreContext,
};

ReactDOM.render(
    <StoreProvider options={options}>
        <App options={options} />
    </StoreProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
