import React, { useReducer } from 'react';
import { StoreProvider } from './context';

const Provider = ({ children, options }) => {
    const { reducer, initialState } = options;
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreProvider value={{ state, dispatch }}>{children}</StoreProvider>
    );
};

export default Provider;
