import React from 'react';

export default (name, form, { defaultValue, validations = [] }) => {
  const [value, setValue] = React.useState(defaultValue);
  const [errors, setErrors] = React.useState([]);

  const validate = () => {
    const formData = form.getFormData();

    let errorMessages = validations.map((validation) =>
      validation(formData, name)
    );

    errorMessages = errorMessages.filter((errorMsg) => !!errorMsg);

    setErrors(errorMessages);

    return errorMessages.length === 0;
  };

  const setError = (errorMsg) => {
    setErrors([errorMsg]);
  };

  const field = {
    name,
    value,
    errors,
    validate,
    setError,
    onChange: (e) => {
      setValue(e.target.value);
      setErrors([]);
    },
  };

  form.addField(field);

  return field;
};
