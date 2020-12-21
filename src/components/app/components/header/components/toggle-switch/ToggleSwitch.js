import React from 'react';
import classnames from 'classnames';
import classes from './styles.module.css';

const ToggleSwitch = ({ checked, toggleChange }) => (
    <>
        <input
            checked={checked}
            onChange={toggleChange}
            className={classes?.reactSwitchCheckbox}
            id={`react-switch-new`}
            type="checkbox"
        />
        <label
            className={classnames(classes?.reactSwitchLabel, {
                [classes?.reactSwitchChecked]: checked,
            })}
            htmlFor={`react-switch-new`}
        >
            <span className={classes?.reactSwitchButton} />
        </label>
    </>
);

export { ToggleSwitch };
export default ToggleSwitch;
