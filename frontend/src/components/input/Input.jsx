import React from 'react';
import classNames from 'classnames';

import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { useStyles } from './styles';

const Input = (props) => {
  const {
    input,
    label,
    isHiddenErrorMsg,
    maxLength,
    isOnlyNumber,
    className,
    labelClass,
    inputClass,
    mask,
    meta: { touched, error, submitFailed },
    ...otherProps
  } = props;
  const classes = useStyles();

  const onChangeHandler = (e) => {
    if (isOnlyNumber) {
      input.onChange(e.target.value.replace(/\D/g, ''));
      return;
    }

    input.onChange(e.target.value);
  };

  return (
    <div className={classNames(classes.root, className)}>
      {label && (
        <InputLabel
          className={classNames(classes.label, labelClass)}
          htmlFor={`${label}-input`}
          disabled={otherProps.disabled}
          classes={{
            disabled: classes.disabledLabel,
          }}
        >
          {label}
        </InputLabel>
      )}
      <InputBase
        classes={{
          root: classNames(
            classes.inputRoot,
            {
              [classes.error]:
                (submitFailed || (touched && !isHiddenErrorMsg)) && error,
            },
            inputClass
          ),
          focused: classes.inputRootFocused,
          input: classes.input,
          disabled: classes.disabledInput,
        }}
        inputProps={{
          mask: mask,
          maxLength: isOnlyNumber ? maxLength : 255,
        }}
        id={`${label}-input`}
        {...input}
        {...otherProps}
        onChange={onChangeHandler}
      />
      {!isHiddenErrorMsg && (touched || submitFailed) && error && (
        <FormHelperText error>{error}</FormHelperText>
      )}
    </div>
  );
};

export default Input;
