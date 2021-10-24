import React, { Component, Fragment } from 'react'
import "../LoginForm/LoginForm.css"
export default class RegisterForm extends Component {
    render() {
        return (
            <Fragment>
                <form className="login-form">
                    <input type="text" name="name" id="name" placeholder="Username" required />
                    <input type="email" name="email" id="email" placeholder="Email Address" required />
                    <input type="number" name="phone" id="phone" placeholder="Phone Number" required />
                    <input type="password" name="password" id="password" placeholder="Password" required />
                    <input type="password" name="password" id="password" placeholder="Re-Type Password" required />
                    <button className="login-btn">Register</button>
                </form>
            </Fragment>
        )
    }
}
