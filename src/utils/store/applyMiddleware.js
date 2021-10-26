import compose from 'utils/compose';

const applyMiddleware =
    (...enhancers) =>
    (createStore) =>
    (reducer, preloadedState) => {
        const {
            getState,
            dispatch: storeDispatch,
            subscribe,
        } = createStore(reducer, preloadedState);

        const enhancedDispatch = (action) => storeDispatch(action);

        const middlewares = enhancers.map((middleware) =>
            middleware({ getState, dispatch: enhancedDispatch })
        );

        const dispatch = compose(...middlewares)(storeDispatch);

        return { getState, dispatch, subscribe };
    };

export default applyMiddleware;
