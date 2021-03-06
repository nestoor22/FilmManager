import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import useStyles from './styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CustomCheckBoxField = ({ input, values }) => {
  const classes = useStyles();

  const handleChange = (newValue) => {
    const previousValues = input.value;

    if (!previousValues.includes(newValue)) {
      input.onChange([newValue, ...previousValues]);
    } else {
      input.onChange(
        input.value.filter((item) => {
          return item !== newValue;
        })
      );
    }
  };

  return (
    <div className={classes.checkBoxWrapper}>
      {values.map((item, index) => {
        return (
          <FormControlLabel
            key={index}
            classes={{
              label: classes.label,
            }}
            control={
              <Checkbox
                color={'primary'}
                key={index}
                value={item}
                checked={input.value.includes(item)}
                onChange={(event) => handleChange(event.target.value)}
              />
            }
            label={item}
          />
        );
      })}
    </div>
  );
};

export default CustomCheckBoxField;
