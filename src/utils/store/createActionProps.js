const createActionProps = (actionPropsCreators) => (dispatch) =>
    Object.entries(actionPropsCreators).reduce((props, [key, action]) => {
        props[key] = (...args) => dispatch(action(...args));
        return props;
    }, {});

export default createActionProps;
