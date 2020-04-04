import React from 'react';
import classNames from 'classnames';

import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { useStyles } from './styles';

const SimpleInput = props => {
    const { input, label, className, errors, errorText, ...otherProps } = props;

    const classes = useStyles();

    const showErrors = !!errors.length;

    return (
        <div className={classNames(classes.root, className)}>
            <InputLabel
                className={classes.label}
                htmlFor={`${label}-input`}
                disabled={otherProps.disabled}
                classes={{
                    disabled: classes.disabledLabel
                }}
            >
                {label}
            </InputLabel>
            <InputBase
                classes={{
                    root: classNames(classes.inputRoot, { [classes.error]: showErrors }),
                    focused: classNames({ [classes.inputRootFocused]: !showErrors }),
                    input: classes.input,
                    disabled: classes.disabledInput
                }}
                id={`${label}-input`}
                {...otherProps}
            />
            {errorText && <FormHelperText error>{errorText}</FormHelperText>}
        </div>
    );
};

export default SimpleInput;
