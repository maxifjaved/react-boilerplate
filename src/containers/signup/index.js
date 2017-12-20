import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { userSignupRequest, sendApolloRequest } from '../../actions/user'
import { SignUpForm } from '../../components'
import { signupValidation } from '../../validations'

import './signup.css'

class Signup extends Component {
    state = {
        fields: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            timezone: 'America/Los_Angeles',
            terms: [],
            gender: [],
            account: [],
            language: [],
        },
        errors: {},
        isLoading: false,
        invalid: false
    };

    isValid = () => {
        const { errors, isValid } = signupValidation(this.state.fields);
        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });

            this.props.userSignupRequest(this.state).then(() => {
                this.props.addFlashMessage({
                    type: 'success',
                    text: 'You signed up successfully. Welcome!'
                });
                this.context.router.push('/');
            }, (err) => this.setState({ errors: err.response.data, isLoading: false }));
        }

    };
    onChange = (e) => {
        e.preventDefault();

        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({ fields: { ...this.state.fields, [name]: value } });

    };
    onChangeCheckboxOrRadio = (name, value) => {
        this.setState({ fields: { ...this.state.fields, [name]: value } });
    };
    checkUserExists = (e) => {

    };
    sendApolloRequest = (e) => {
        this.props.sendApolloRequest();
    };



    render = () => {
        const { fields, errors, invalid, isLoading } = this.state;

        return (
            <div>
                <SignUpForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    onChangeCheckboxOrRadio={this.onChangeCheckboxOrRadio}
                    checkUserExists={this.checkUserExists}
                    fields={fields}
                    isLoading={isLoading}
                    errors={errors}
                />

                <button onClick={this.sendApolloRequest}>Send Apollo Request</button>
            </div>
        )
    }


}

Signup.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { userSignupRequest, sendApolloRequest })(Signup);