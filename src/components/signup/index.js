import React from 'react'
import { SelectFieldGroup, TextFieldGroup } from '../common'

const SignUpForm = (props) => {
    const { onSubmit, onChange, checkUsernameExists, checkUserEmailExists, fields, errors } = props;

    console.log(errors);
    return (
        <form onSubmit={onSubmit}>
            <h1>Join our community!</h1>

            <TextFieldGroup
                error={errors.firstName}
                label="First Name"
                onChange={onChange}
                value={fields.firstName}
                field="firstName"
            />

            <TextFieldGroup
                error={errors.lastName}
                label="Last Name"
                onChange={onChange}
                value={fields.lastName}
                field="lastName"
            />

            <TextFieldGroup
                error={errors.username}
                label="Username"
                onChange={onChange}
                onBlur={checkUsernameExists}
                value={fields.username}
                field="username"
            />

            <TextFieldGroup
                error={errors.email}
                label="Email"
                onChange={onChange}
                onBlur={checkUserEmailExists}
                value={fields.email}
                field="email"
                type="email"
            />

            <TextFieldGroup
                error={errors.password}
                label="Password"
                onChange={onChange}
                value={fields.password}
                field="password"
                type="password"
            />

            <TextFieldGroup
                error={errors.confirmPassword}
                label="Repeat Password"
                onChange={onChange}
                value={fields.confirmPassword}
                field="confirmPassword"
                type="password"
            />
        </form>

    );
}

export default SignUpForm;