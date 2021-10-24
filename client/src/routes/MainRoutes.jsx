import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "../pages/Home"
import Register from "../pages/Register"
import Profile from "../pages/Profile"
import Login from '../pages/Login'

export default class MainRoutes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    
                    <Switch>
                        <Route exact path="/" component={Home}  />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
