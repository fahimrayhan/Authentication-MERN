import React, { Fragment, useState, useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import user_img from '../assets/user_thumb.png'
import Axios from 'axios'

export default function Home() {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        Axios.get("http://localhost:8080/users").then((response) => {
            setUsers(response.data);
            console.log(response.data);
        })
    }, [])

    return (
        <Fragment>
            <NavBar />
            <main className="main">
                <h1>Registered Users</h1>
                <div className="searchField">
                    <input type="search" name="search" id="search" />
                    <button type="submit">Search</button>
                </div>
                <div className="userCards">
                    {
                        users.map((user,key) => {
                            return(
                                <div className="card" key={key}>
                                    <img src={user_img} alt="" />
                                    <h2>{user.username}</h2>

                                </div>
                            )
                        })
                    }
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}

