import React from 'react';
import classNames from 'classnames';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { useStyles, formControlLabelStyles, radioBtnStyles } from './styles';

const RadioButtonsGroup = ({
  input,
  label,
  list,
  isId,
  checkboxTitleField,
  radioGroupRootClass,
  labelClass,
}) => {
  const classes = useStyles();
  const formControlLabelClasses = formControlLabelStyles();
  const radioBtnSClasses = radioBtnStyles();

  const isSelected = (item) => {
    if (isId) {
      return item.id === input.value.id;
    }

    return item === input.value;
  };

  const onChangeHandler = (e) => {
    if (isId) {
      const updatedItem = list.find((item) => item.id === e.target.value);
      input.onChange(updatedItem);

      return;
    }

    input.onChange(e.target.value);
  };

  return (
    <div className={classes.wrapper}>
      {label && <div className={classes.label}>{label}</div>}
      <RadioGroup
        aria-label="position"
        name="position"
        row
        value={isId ? input.value.id || null : input.value}
        onChange={onChangeHandler}
        classes={{ root: radioGroupRootClass }}
      >
        {list.map((item, index) => (
          <FormControlLabel
            classes={formControlLabelClasses}
            key={index}
            value={isId ? item.id : item}
            control={<Radio color="default" classes={radioBtnSClasses} />}
            label={
              <div
                className={classNames(
                  {
                    [classes.radioBtnLabelChecked]: isSelected(item),
                  },
                  labelClass
                )}
              >
                {checkboxTitleField ? item[checkboxTitleField] : item}
              </div>
            }
            labelPlacement="end"
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioButtonsGroup;
