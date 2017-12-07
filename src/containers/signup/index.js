import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { signup } from '../../actions/user'
import { SignUpForm } from '../../components'

import './signup.css'

class Signup extends Component {
    state = {
        name: 'test'
    };

    submitForm = () => {
        this.setState({ name: 'google' });
        console.log(this.state.name);
        console.log(this.props.signup());
    };



    render = () => {
        return <SignUpForm />
    }


}

Signup.propTypes = {
    signup: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { signup })(Signup);