import React, { Component, Fragment } from 'react'
import "./LoginForm.css"
export default class LoginForm extends Component {
    render() {
        return (
            <Fragment>
                <form className="login-form">
                    <input type="email" name="email" id="email" required placeholder="Email address" />
                    <input type="password" name="password" id="password" required placeholder="Password" />
                    <button className="login-btn">Login</button>
                </form>
            </Fragment>
        )
    }
}
