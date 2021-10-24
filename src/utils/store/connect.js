import React from 'react';
import { useStoreContext } from './context';

const connect =
    (mapStateToProps, mapDispatchToProps) => (Component) => (props) => {
        const MemoizedComponent = React.memo(Component);

        const {
            store: { getState, dispatch },
        } = useStoreContext();
        console.log('from connect', getState());
        const modelProps = mapStateToProps(getState());
        const modelActions = mapDispatchToProps(dispatch);

        return (
            <MemoizedComponent {...modelProps} {...modelActions} {...props} />
        );
    };

export default connect;
