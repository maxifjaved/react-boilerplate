import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { signup } from '../../actions/user'

import './signup.css'

// const Signup = () => (
//     <form className="form-signin">
//         <h2 className="form-signin-heading">Please sign up here</h2>
//         <label for="inputEmail" className="sr-only">Email address</label>
//         <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
//         <label for="inputPassword" className="sr-only">Password</label>
//         <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
//         <div className="checkbox">
//             <label>
//                 <input type="checkbox" value="remember-me" /> Remember me
//           </label>
//         </div>
//         <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
//     </form>

// );

class Signup extends Component {
    state = {
        name: 'test'
    };

    submitForm = () => {
        this.setState({ name: 'google' });
        console.log(this.state.name);
        console.log(this.props.signup);
    };



    render = () => {
        return (<button className="btn btn-success" onClick={this.submitForm}>Click me to send requst to backend</button>)
    }


}

Signup.propTypes = {
    signup: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { signup })(Signup);