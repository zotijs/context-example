import React from 'react';
import { useStoreContext } from './context';

const connect =
    (mapStateToProps, mapDispatchToProps) => (Component) => (props) => {
        const MemoizedComponent = React.memo(Component);

        const { state, dispatch } = useStoreContext();

        const modelProps = mapStateToProps(state);
        const modelActions = mapDispatchToProps(dispatch);

        return (
            <MemoizedComponent {...modelProps} {...modelActions} {...props} />
        );
    };

export default connect;
