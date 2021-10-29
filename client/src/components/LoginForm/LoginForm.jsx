import React, { Fragment, useState } from 'react'
import "./LoginForm.css"
import Axios from "axios"

export default function LoginForm() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [msg, setMsg] = useState("")

    const userLogin = (e) =>{
        e.preventDefault();
        Axios.post("http://localhost:8080/login",{email: email,password: password}).then((response) =>{
            setMsg(response.data.message)
        })
    }

    return (
        <div>
            <Fragment>
                <form className="login-form">
                    <input type="email" name="email" id="email" required placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="password" id="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="login-btn" onClick={(e) => { userLogin(e)}}>Login</button>
                </form>
                {msg}
            </Fragment>
        </div>
    )
}

