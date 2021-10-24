import { BehaviorSubject } from 'rxjs';

const createStore = (reducer, initialState = {}, enhancers = []) => {
    let stateValue = initialState;

    const state$ = new BehaviorSubject(initialState);
    const action$ = new BehaviorSubject({});

    state$.subscribe((state) => (stateValue = state));
    state$.subscribe(console.log);

    const getState = () => stateValue;
    const dispatch = (action) => {
        state$.next(reducer(getState(), action));
        action$.next(action);
    };

    const subscribe = (observer) => state$.subscribe(observer);

    return { getState, dispatch, subscribe };
};

export default createStore;
