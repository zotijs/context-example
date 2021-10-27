import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs';

const rootEpic = (epics) => (action$, store$, dependencies) =>
    combineEpics(...epics)(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        })
    );

export default rootEpic;
