import React, { useReducer } from 'react';

const StoreProvider = ({ children, options }) => {
    const { reducer, initialState, StoreContext } = options;
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
