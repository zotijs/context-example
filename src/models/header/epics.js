import { map } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { toggleMode, setCounter } from './actions';
import { counter } from './selectors';

const counterEpic = (action$, state$) =>
    action$.pipe(
        ofType(toggleMode.type),
        map(() => {
            const counterValue = counter(state$?.value);

            return setCounter(counterValue + 1);
        })
    );

const epics = combineEpics(counterEpic);

export { counterEpic };
export default epics;
