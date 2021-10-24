import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import LoginForm from '../components/LoginForm/LoginForm'
import NavBar from '../components/NavBar/NavBar'
export default class Login extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <h1>Login</h1>
                <main>
                    <LoginForm/>
                </main>
                <Footer/>
            </Fragment>
        )
    }
}
