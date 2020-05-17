import React from 'react';
import classNames from 'classnames';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import CloseIcon from '@material-ui/icons/Close';

import { useStyles, autocompleteStyles, chipStyles } from './styles';

const ChipsInput = ({
  input,
  id,
  label,
  placeholder,
  maxLength,
  className,
  meta: { touched, error },
}) => {
  const classes = useStyles();
  const autocompleteClasses = autocompleteStyles();
  const chipClasses = chipStyles();

  const onChangeHandler = (e, value) => {
    input.onChange(value);
  };

  return (
    <div className={classNames(classes.root, className)}>
      <InputLabel className={classes.label} htmlFor={`${id}-input`}>
        {label}
      </InputLabel>

      <Autocomplete
        multiple
        id={`${id}-input`}
        className={classNames({
          [classes.error]: touched && error,
        })}
        classes={autocompleteClasses}
        options={[]}
        freeSolo
        closeIcon={<div className={classes.closeIcon}>{''}</div>}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              classes={chipClasses}
              variant="outlined"
              label={option}
              deleteIcon={<CloseIcon className={classes.deleteChipIcon} />}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            id={`${id}-input`}
            inputProps={{
              ...params.inputProps,
              maxLength: maxLength,
            }}
            variant="filled"
            placeholder={placeholder}
            fullWidth
          />
        )}
        value={input.value}
        onChange={onChangeHandler}
      />
      {touched && error && <FormHelperText error>{error}</FormHelperText>}
    </div>
  );
};

export default ChipsInput;
