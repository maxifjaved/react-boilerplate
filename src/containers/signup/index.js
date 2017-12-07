import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { signup } from '../../actions/user'
import { SignUpForm, SignUpFormV2 } from '../../components'

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
            gender: '',
        },
        errors: {},
        isLoading: false
    };

    onSubmit = (e) => {

    };
    onChange = (e) => {

    };
    checkUserExists = (e) => {

    };



    render = () => {
        const { fields, errors } = this.state;

        return (
            <div>
                <SignUpForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                    fields={fields}
                    errors={errors}
                />
                <SignUpFormV2 />
            </div>
        )
    }


}

Signup.propTypes = {
    signup: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { signup })(Signup);