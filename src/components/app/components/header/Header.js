import React from 'react';
import classes from './styles.module.css';

import { withModelProps } from 'utils';

import { toggleMode, checked } from 'models/header';

import { ToggleSwitch } from './components';

const Header = ({ toggleMode, checked }) => (
    <div className={classes?.container}>
        <h3 className={classes?.header}>Hello Context</h3>
        <ToggleSwitch checked={checked} toggleChange={toggleMode} />
    </div>
);

export { Header };
export default withModelProps({ toggleMode, checked })(Header);
