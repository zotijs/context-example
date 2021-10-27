import { toggleMode, setCounter } from './actions';

const initialState = {
    checked: false,
    counter: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case toggleMode.type:
            return { ...state, checked: !state?.checked };
        case setCounter.type:
            return { ...state, counter: action.payload };
        default:
            return state;
    }
};

export default reducer;
