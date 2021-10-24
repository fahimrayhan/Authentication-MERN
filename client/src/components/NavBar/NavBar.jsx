import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import "./NavStyle.css"
export default class NavBar extends Component {
    render() {
        return (
                <Fragment>
                    <div className="nav">
                        <h1 className="nav-title">React Node Authentication</h1>
                        <ul className="nav-links">
                            <li><Link to="/">Home</Link> </li>
                            <li><Link to="/profile">Profile</Link> </li>
                            <li><Link to="/register">Register</Link> </li>
                        </ul>
                    <Link to="/login"><button className="nav-btn">Login</button></Link>
                    </div>
                </Fragment>
        )
    }
}
