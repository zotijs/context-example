import { toggleMode } from './actions';

const initialState = {
    checked: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case toggleMode.type:
            return { ...state, checked: !state?.checked };
        default:
            return state;
    }
};

export default reducer;
