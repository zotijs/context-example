import separatePropCreators from './separatePropCreators';
import createActionProps from './createActionProps';
import createProps from './createProps';
import connect from './connect';

const EMPTY_OBJ = {};

const withModelProps = (propsCreators) => {
    const { statePropsCreators, actionPropsCreators } = separatePropCreators(
        propsCreators
    );

    const componentPropsCreator = createProps(statePropsCreators || EMPTY_OBJ);
    const componentActionsCreator = createActionProps(
        actionPropsCreators || EMPTY_OBJ
    );

    return connect(componentPropsCreator, componentActionsCreator);
};

export default withModelProps;
