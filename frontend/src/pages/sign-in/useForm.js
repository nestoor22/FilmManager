import React from 'react';

export default ({ onSubmit }) => {
    let [submitted, setSubmitted] = React.useState(false);

    const fields = [];

    const getFormData = () => {
        return fields.reduce((formData, field) => {
            formData[field.name] = field.value;

            return formData;
        }, {});
    };

    const validateFields = () => {
        const fieldsValid = fields.map(field => {
            return field.validate();
        });

        return fieldsValid.every(isValid => {
            return isValid === true;
        });
    };

    return {
        handleSubmit: e => {
            e.preventDefault();
            const formValid = validateFields();
            setSubmitted(true);
            return onSubmit(getFormData(), formValid);
        },
        addField: field => fields.push(field),
        getFormData,
        submitted
    };
};
