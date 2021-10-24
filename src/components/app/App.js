import React from 'react';
import classes from './styles.module.css';

import { Header } from './components';

const App = () => (
    <div className={classes?.container}>
        <div className={classes?.headerContainer}>
            <Header />
        </div>
        <div className={classes?.contentContainer}></div>
    </div>
);

export { App };

export default App;
