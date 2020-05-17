import React from 'react';
import classNames from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormHelperText from '@material-ui/core/FormHelperText';

import CloseIcon from '@material-ui/icons/Close';

import { useStyles, autocompleteStyles, chipStyles } from './styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const AsyncChipsInput = ({
  input,
  label,
  placeholder,
  maxLength,
  className,
  query,
  queryName,
  optionLabel,
  meta: { touched, error },
}) => {
  const classes = useStyles();
  const autocompleteClasses = autocompleteStyles();
  const chipClasses = chipStyles();

  const [open, setOpen] = React.useState(false);
  const [searchName, setSearchName] = React.useState('');
  const [options, setOptions] = React.useState([]);

  const { loading, data, refetch } = useQuery(query, {
    variables: {
      startWith: searchName,
    },
  });

  React.useEffect(() => {
    if (!loading) setOptions(data[queryName] || []);
  }, [data, loading, queryName]);

  React.useEffect(() => {
    refetch({
      variables: {
        startWith: searchName,
      },
    });
  }, [refetch, searchName]);

  return (
    <div className={classNames(classes.root, className)}>
      <InputLabel className={classes.label} htmlFor={`${label}-input`}>
        {label}
      </InputLabel>

      <Autocomplete
        multiple
        id="asynchronous-demo"
        className={classNames({
          [classes.error]: touched && error,
        })}
        classes={autocompleteClasses}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        onChange={(event, value) => {
          input.onChange(value);
        }}
        onInputChange={(event, value) => setSearchName(value)}
        value={input.value}
        getOptionSelected={(option, value) =>
          `${option.showId}` === `${value.showId}`
        }
        getOptionLabel={(option) => option[optionLabel]}
        options={options}
        loading={loading}
        closeIcon={<div className={classes.closeIcon}>{''}</div>}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              classes={chipClasses}
              variant="outlined"
              label={option[optionLabel]}
              deleteIcon={<CloseIcon className={classes.deleteChipIcon} />}
              {...getTagProps({ index })}
            />
          ))
        }
        renderOption={(option) => (
          <React.Fragment>
            <div className={classNames(classes.showRow)}>
              <CardMedia
                className={classes.poster}
                component="img"
                alt="Poster"
                height="30"
                width="20"
                image={option.posterUrl}
                title="Poster"
              />
              <div>
                <Typography className={classes.showTitle}>
                  {option.title}
                </Typography>
              </div>
            </div>
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            placeholder={placeholder}
            fullWidth
            inputProps={{
              ...params.inputProps,
              maxLength: maxLength,
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />

      {touched && error && <FormHelperText error>{error}</FormHelperText>}
    </div>
  );
};

export default AsyncChipsInput;
