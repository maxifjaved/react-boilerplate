import React, { Component } from 'react'
import { Route } from "react-router-dom"
import requireAuth from '../../../utils/requireAuth';
import { Home, Signup, Login } from '../../'

class EmptyLayout extends Component {
    render() {
        return (
            <div className="container">
                <Route exact path="/" component={requireAuth(Home)} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </div>
        );
    }
}
export default EmptyLayout;