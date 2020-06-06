import moment from 'moment';

export const prepareUserData = (mainForm, interestsForm, additionalForm) => {
  const photoObj = additionalForm.values.photo ? { photo: additionalForm.values.photo.file } : {};

  delete mainForm.values['confirmPassword'];
  delete additionalForm.values.photo;

  additionalForm.values.birthday = additionalForm.values.birthday = additionalForm
    .values.birthday
    ? moment(additionalForm.values.birthday).format('YYYY-MM-DD')
    : null;

  const userObj = { ...mainForm.values, ...additionalForm.values };

  return {
    ...photoObj,
    user: { ...userObj },
  };
};
