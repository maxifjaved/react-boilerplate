import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import requireAuth from '../../../utils/requireAuth';
import { Home, Signup, Login } from '../../'

class EmptyLayout extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path="/" component={requireAuth(Home)} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </div>
        );
    }
}
export default EmptyLayout;