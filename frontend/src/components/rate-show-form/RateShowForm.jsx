import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { CustomSliderField } from 'components';

import useStyles from './styles';

const RateShowForm = ({
  value,
  setValue,
  defaultValue,
  onChange,
  onSubmit,
}) => {
  const classes = useStyles();
  setValue(value ? value : defaultValue);

  return (
    <div className={classes.formWrapper}>
      <div style={{ display: 'flex', width: '100%' }}>
        <CustomSliderField value={value ? value : defaultValue} onChange={onChange} />
        <Typography className={classes.rating}>{value ? value : defaultValue}</Typography>
      </div>
      <Button
        type="submit"
        variant="contained"
        classes={{
          root: classes.actionBtnRoot,
        }}
        onClick={onSubmit}
      >
        Set rating
      </Button>
    </div>
  );
};

export default RateShowForm;
