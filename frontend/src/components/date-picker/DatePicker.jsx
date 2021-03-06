import React from 'react';

import Moment from 'react-moment';
import classNames from 'classnames';
import MomentUtils from '@date-io/moment';

import EventIcon from '@material-ui/icons/Event';
import { Typography } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FormHelperText from '@material-ui/core/FormHelperText';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import { useStyles } from './styles';

const SingleDatePicker = ({
  input,
  label,
  className,
  disableFuture,
  isInput,
  labelTypographyVariant,
  meta: { touched, error, submitFailed },
}) => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className={classNames(classes.wrapper, className)}>
        {isInput ? (
          <label htmlFor="singleDate" className={classes.inputLabel}>
            {label}
          </label>
        ) : (
          <label className={classes.label}>
            <Typography
              variant={labelTypographyVariant ? labelTypographyVariant : 'h2'}
            >
              {label}
            </Typography>
            <Typography variant="body1">
              {input.value && (
                <Moment format="MMM D, YYYY">{input.value}</Moment>
              )}
            </Typography>
          </label>
        )}

        {isInput && (
          <label
            htmlFor="singleDate"
            className={classNames(
              classes.customInputDate,
              {
                [classes.focus]: false,
              },
              {
                [classes.errorInput]: (touched || submitFailed) && error,
              }
            )}
          >
            <DateRangeIcon className={classes.calendarIcon} />

            {input.value ? (
              <Moment format="MMM D, YYYY">{input.value}</Moment>
            ) : (
              <div>Date</div>
            )}
          </label>
        )}

        <div className={classNames(classes.hiddenDateRangePicker)}>
          <EventIcon className={classes.calendarIcon} />
          <DatePicker
            format={input.value ? 'MMM D, YYYY' : undefined}
            disableFuture={disableFuture}
            classes={{ root: classes.hiddenDateRangePicker }}
            value={input.value ? input.value : null}
            onChange={input.onChange}
          />
        </div>

        {(touched || submitFailed) && error && (
          <FormHelperText
            className={classNames({ [classes.error]: isInput })}
            error
          >
            {error}
          </FormHelperText>
        )}
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default SingleDatePicker;
