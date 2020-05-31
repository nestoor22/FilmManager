import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { FormButtons, ChipsInput } from 'components';

import useStyles from './styles';

const initialValues = {
  favoriteGenres: [],
  favoriteShow: [],
  favoriteActors: [],
};

const InterestsInfoForm = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.registerForm}>
      <form onSubmit={handleSubmit}>
        <Field
          name="favoriteShow"
          placeholder="Enter names and hit Enter"
          label="Favorite movies/series"
          className={classes.inputIndent}
          component={ChipsInput}
        />
        <Field
          name="favoriteGenres"
          placeholder="Enter names and hit Enter"
          label="Favorite genres"
          className={classes.inputIndent}
          component={ChipsInput}
        />
        <Field
          name="favoriteActors"
          placeholder="Enter names and hit Enter"
          label="Favorite actors/actress *"
          className={classes.inputIndent}
          component={ChipsInput}
        />
        <FormButtons
          actionBtnClass={classes.actionBtnClass}
          buttonWrapperClass={classes.buttonWrapper}
          actionLabel="Sign Up"
        />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'interestsInfoForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  touchOnBlur: false,
  initialValues,
})(InterestsInfoForm);
