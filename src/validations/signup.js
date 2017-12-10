
import { isEmpty, isEmail, equals } from 'validator';

import { isEmpty as _isEmpty } from 'lodash';

function signupValidation(data) {
    let errors = {};


    if (isEmpty(data.firstName)) {
        errors.firstName = 'This field is required';
    }
    if (isEmpty(data.lastName)) {
        errors.lastName = 'This field is required';
    }

    if (isEmpty(data.email)) {
        errors.email = 'This field is required';
    }
    if (!isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    if (isEmpty(data.username)) {
        errors.username = 'This field is required';
    }
    if (isEmpty(data.password)) {
        errors.password = 'This field is required';
    }
    if (isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'This field is required';
    }
    if (!equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Passwords must match';
    }
    if (isEmpty(data.gender)) {
        errors.gender = 'This field is required';
    }

    return {
        errors,
        isValid: _isEmpty(errors)
    }
}

export default signupValidation;