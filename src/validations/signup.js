
import { isEmpty, isEmail, equals, isAlphanumeric } from 'validator'

import { isEmpty as _isEmpty } from 'lodash'

function signupValidation(data) {
    let errors = {};


    if (isEmpty(data.firstName)) {
        errors.firstName = 'This field is required'
    }

    if (isEmpty(data.lastName)) {
        errors.lastName = 'This field is required'
    }

    if (isEmpty(data.email)) {
        errors.email = 'This field is required'
    }
    if (data.email && !isEmail(data.email)) {
        errors.email = 'Email is invalid'
    }
    if (isEmpty(data.username)) {
        errors.username = 'This field is required'
    }
    if (isEmpty(data.password)) {
        errors.password = 'This field is required'
    }

    if (data.password && isAlphanumeric(data.password)) {
        errors.password = 'Password must be alphanumeric i.e abc23!'
    }

    if (isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'This field is required'
    }
    if (data.confirmPassword && !equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Passwords must match'
    }
    if (isEmpty(data.timezone)) {
        errors.timezone = 'This field is required'
    }

    if (!data.terms.length) {
        errors.terms = 'Accept Term and condition to proceed'
    }

    if (!data.gender.length) {
        errors.gender = 'Select your gender'
    }


    return {
        errors,
        isValid: _isEmpty(errors)
    }
}

export default signupValidation