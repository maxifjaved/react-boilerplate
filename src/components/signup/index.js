import React from 'react'
import { TextFieldGroup, SelectFieldGroup, CheckboxGroup, RadioFieldGroup } from '../common'
import { timezones, terms, gender } from '../../data'

const SignUpForm = (props) => {
    const { onSubmit, onChange, onChangeCheckboxOrRadio, checkUsernameExists, checkUserEmailExists, fields, errors, isLoading } = props;

    return (
        <form onSubmit={onSubmit}>
            <h1>Join Us !</h1>

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
            <SelectFieldGroup
                error={errors.timezone}
                label="Timezone"
                onChange={onChange}
                value={fields.timezone}
                field="timezone"
                data={timezones}
            />

            <RadioFieldGroup
                error={errors.gender}
                label={'Select Your Gender'}
                data={gender}
                onChange={onChangeCheckboxOrRadio}
                value={fields.gender}
                field="gender"
            />


            <CheckboxGroup
                error={errors.terms}
                label={'Accept Term And Conditions'}
                data={terms}
                onChange={onChangeCheckboxOrRadio}
                value={fields.terms}
                field="terms"
            />


            <div className="form-group">
                <button disabled={isLoading} className="btn btn-primary btn-lg">
                    Sign up
                </button>
            </div>
        </form>

    );
}

export default SignUpForm;