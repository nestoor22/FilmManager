import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

import useStyles from './styles';

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const CustomSliderField = ({value, onChange}) => {
  const classes = useStyles();

  return (
    <div className={classes.sliderWrapper}>
      <Slider
        onChange={onChange}
        ValueLabelComponent={ValueLabelComponent}
        value={value}
        aria-labelledby="input-slider"
        min={0}
        step={0.1}
        max={10}
      />
    </div>
  );
};

export default CustomSliderField;
