import React, { Fragment, useState} from 'react'
import Axios from 'axios'
import "../LoginForm/LoginForm.css"


export default function RegisterForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")
    const [msg, setMsg] = useState("")

  const userRegister= (e) => {
      e.preventDefault();

      Axios.post('http://localhost:8080/register', { username: name, email: email, phone: phone, password: password, repassword:repassword}).then(response => {
            setMsg(response.data.message);
            console.log(response)
        })
    }

    // useEffect(() => {
    //     console.log(name + " " + phone + " " + email + " " + password + " ")
    // }, [name,email,phone,password])

    return (
        <div>
            <Fragment>
                <form className="login-form" >
                    <input type="text" name="name" id="name" placeholder="Username" required onChange={(e) => { setName(e.target.value)}} />
                    <input type="email" name="email" id="email" placeholder="Email Address" required onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="number" name="phone" id="phone" placeholder="Phone Number" required onChange={(e) => { setPhone(e.target.value) }}/>
                    <input type="password" name="password" id="password" placeholder="Password" required onChange={(e) => { setPassword(e.target.value) }}/>
                    <input type="password" name="repassword" id="repassword" placeholder="Re-Type Password" required onChange={(e) => { setRepassword(e.target.value) }}/>
                    <button className="login-btn" onClick={(e) => {userRegister(e)}}>Register</button>
                </form>
                {msg}
            </Fragment>
        </div>
    )
}

