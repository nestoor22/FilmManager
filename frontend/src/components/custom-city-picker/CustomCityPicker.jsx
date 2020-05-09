import React from 'react';

import classNames from 'classnames';
import { RegionDropdown } from 'react-country-region-selector';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { useStyles } from './styles';

const CustomCityPicker = ({
  input,
  country,
  label,
  className,
  meta: { touched, error },
}) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <InputLabel className={classes.label} htmlFor={`${label}-input`}>
        {label}
      </InputLabel>

      <RegionDropdown
        country={country}
        defaultOptionLabel="Select city"
        blankOptionLabel="No country selected"
        value={input.value}
        onChange={input.onChange}
        className={classNames(classes.countryDropDown, {
          [classes.error]: touched && error,
        })}
      />

      {touched && error && <FormHelperText error>{error}</FormHelperText>}
    </div>
  );
};

export default CustomCityPicker;
