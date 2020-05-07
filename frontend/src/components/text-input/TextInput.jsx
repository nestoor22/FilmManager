import React from "react";
import classNames from "classnames";

import InputLabel from "@material-ui/core/InputLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormHelperText from "@material-ui/core/FormHelperText";

import { useStyles } from "./styles";

const TextInput = ({
  input,
  label,
  isTranslateError,
  language,
  className,
  meta: { touched, error },
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <InputLabel className={classes.label} htmlFor={`${label}-input`}>
        {label}
      </InputLabel>

      <TextareaAutosize
        id={`${label}-input`}
        className={classNames(classes.textarea, {
          [classes.error]: touched && error,
        })}
        rowsMin={4}
        rowsMax={6}
        {...input}
        {...otherProps}
      />

      {touched && error && <FormHelperText error>{error}</FormHelperText>}
    </div>
  );
};

export default TextInput;
