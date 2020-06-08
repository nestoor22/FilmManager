import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  SingleDatePicker,
  CustomCityPicker,
  CustomCountryPicker,
  FormButtons,
  TextInput,
} from 'components';

import useStyles from './styles';
import DndUploadImage from 'components/upload-image/UploadImage';

const initialValues = {
  bio: '',
  photo: '',
  city: '',
  country: '',
  birthday: null,
};

const AdditionalInfoForm = ({ handleSubmit }) => {
  const classes = useStyles();
  const [country, setCountry] = React.useState('');

  return (
    <div className={classes.registerForm}>
      <form onSubmit={handleSubmit}>
        <div className={classes.imageFieldWrapper}>
          <Field name="photo" label="Photo" component={DndUploadImage} />
          <Field
            name="birthday"
            className={classes.birthdayWrapper}
            disableFuture={true}
            label="Birthday"
            component={SingleDatePicker}
          />
        </div>
        <div className={classes.inlineFieldsWrapper}>
          <Field
            className={classes.inputIndent}
            changeCountry={setCountry}
            name="country"
            label="Country"
            component={CustomCountryPicker}
          />
          <Field
            className={classes.inputIndent}
            name="city"
            country={country}
            label="City"
            component={CustomCityPicker}
          />
        </div>
        <Field
          className={classes.inputIndent}
          name="bio"
          placeholder="Tell something about you"
          label="Tell something about you"
          component={TextInput}
        />
        <FormButtons
          actionBtnClass={classes.actionBtnClass}
          buttonWrapperClass={classes.buttonWrapper}
          actionLabel="Next"
        />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'additionalInfoForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  touchOnBlur: false,
  initialValues,
})(AdditionalInfoForm);
