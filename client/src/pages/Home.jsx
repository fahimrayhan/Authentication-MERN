import React, { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

export default function Home() {
    return (
        <Fragment>
            <NavBar />
            <main className="main">
                <h1>Home</h1>
            </main>
            <Footer />
        </Fragment>
    )
}

