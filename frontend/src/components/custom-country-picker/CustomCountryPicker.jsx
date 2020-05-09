import React from 'react';
import classNames from 'classnames';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { useStyles } from './styles';
import { CountryDropdown } from 'react-country-region-selector';

const CustomCountryPicker = ({
  input,
  label,
  changeCountry,
  className,
  meta: { touched, error },
}) => {
  const classes = useStyles();

  const handleChange = (country) => {
    changeCountry(country);
    input.onChange(country);
  };

  return (
    <div className={classNames(classes.root, className)}>
      <InputLabel className={classes.label} htmlFor={`${label}-input`}>
        {label}
      </InputLabel>

      <CountryDropdown
        defaultOptionLabel="Select country"
        value={input.value}
        onChange={(e) => handleChange(e)}
        className={classNames(classes.countryDropDown, {
          [classes.error]: touched && error,
        })}
      />

      {touched && error && <FormHelperText error>{error}</FormHelperText>}
    </div>
  );
};

export default CustomCountryPicker;
