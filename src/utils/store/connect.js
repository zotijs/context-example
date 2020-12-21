import React from 'react';
import useStore from './useStore';

const connect = (mapStateToProps, mapDispatchToProps) => (Component) => (
    props
) => {
    const MemoizedComponent = React.memo(Component);

    const StoreContext = props?.options?.StoreContext;
    const { state, dispatch } = useStore(StoreContext);

    const modelProps = mapStateToProps(state);
    const modelActions = mapDispatchToProps(dispatch);

    return <MemoizedComponent {...modelProps} {...modelActions} {...props} />;
};

export default connect;
