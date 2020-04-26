import React from "react";

import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Radio from "@material-ui/core/Radio";
import { useStyles, formControlLabelStyles, radioBtnStyles } from "./styles";

const ColorButtonsGroup = ({
  input,
  label,
  list,
  isId,
  radioGroupRootClass,
}) => {
  const classes = useStyles();
  const formControlLabelClasses = formControlLabelStyles();
  const radioBtnSClasses = radioBtnStyles();

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
            control={
              <Radio
                style={{ color: '#fff', backgroundColor: item }}
                classes={radioBtnSClasses}
              />
            }
            label=""
            labelPlacement="end"
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default ColorButtonsGroup;
