import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <main className="main">
                    <h1>Home</h1>
                </main>
                <Footer/>
            </Fragment>
        )
    }
}
