// eslint-disable-next-line
const emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// eslint-disable-next-line
const passwordRegex = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
// eslint-disable-next-line react-hooks/exhaustive-deps

export const isEmail = (value, errorMessage) => {
    return !emailValidationRegex.test(value) && errorMessage;
};

export const isRequired = (value, errorMessage) => {
    if (value === 0) return false;
    if (!value) return errorMessage;
    return !value.length && errorMessage;
};

export const isValidPassword = (value, errorMessage) => {
    return !passwordRegex.test(value) && errorMessage;
};