import React, { useState } from 'react';
import isEqual from 'lodash/isEqual';
import { useStoreContext } from './context';

// TODO: find a better solution for re-renders
const connect =
    (mapStateToProps, mapDispatchToProps) => (Component) => (props) => {
        const MemoizedComponent = React.memo(Component);

        const [state, setState] = useState({});

        const { dispatch, subscribe } = useStoreContext();

        subscribe(
            (newState) => !isEqual(state, newState) && setState(newState)
        );

        const modelProps = mapStateToProps(state);
        const modelActions = mapDispatchToProps(dispatch);

        return (
            <MemoizedComponent
                {...modelProps}
                {...modelActions}
                {...props}
                state={state}
            />
        );
    };

export default connect;
