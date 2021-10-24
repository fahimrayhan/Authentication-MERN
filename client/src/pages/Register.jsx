import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import RegisterForm from '../components/RegisterForm/RegisterForm'
export default class Register extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <h1>Register</h1>
                <main>
                    <RegisterForm/>
                </main>
                <Footer/>
            </Fragment>
        )
    }
}
