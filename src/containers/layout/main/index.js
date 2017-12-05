import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { Home } from '../../'

class MainLayout extends Component {
    render() {
        return (
            <div>
                <h1>Main Layout</h1>
                <Route path="/dashboard" component={Home} />
            </div>
        );
    }
}
export default MainLayout;