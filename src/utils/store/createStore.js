import { BehaviorSubject } from 'rxjs';

const createStore = (reducer, initialState = {}, enhancer) => {
    let stateValue = initialState;

    const state$ = new BehaviorSubject(initialState);
    const action$ = new BehaviorSubject({ type: 'INIT' });

    state$.subscribe((state) => (stateValue = state));

    // TODO: remove when finished
    state$.subscribe(console.log);

    const getState = () => stateValue;
    const dispatch = (action) => {
        state$.next(reducer(getState(), action));
        action$.next(action);

        return action;
    };

    const subscribe = (observer) => state$.subscribe(observer);

    return enhancer && typeof enhancer === 'function'
        ? enhancer(createStore)(reducer, getState())
        : { getState, dispatch, subscribe };
};

export default createStore;
