const createProps = (statePropsCreators) => (state) =>
    Object.entries(statePropsCreators).reduce((props, [key, propSelector]) => {
        props[key] = propSelector(state);
        return props;
    }, {});

export default createProps;
