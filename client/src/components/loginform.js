import React, { useState } from 'react';
import { useAtom } from "jotai";
import { usernameG } from "../Atoms"
import {loggedIn} from "../Atoms"
import axios from "axios";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [whatIsTheUsername, retrieveUsername] = useAtom(usernameG)
    const [areWeLoggedIn, loggedInCheck] = useAtom(loggedIn)

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/api/user/login",{
            email: email,
            password:password
        }).catch((error)=>{
            alert("We were not able to log you in! Please check your credentials")
        })               
        .then(()=>{
            (axios.get("/api/user/user_data"))
            .then((res)=>{
                alert("Welcome "+res.data.username+ "!")
                console.log(res.data.username + " has been logged in")
                retrieveUsername(res.data.username)
                loggedInCheck(true)
            })
    })
    document.getElementById("signup-username").value = ""
    document.getElementById("signup-email").value = ""
    document.getElementById("signup-password").value = ""
    document.getElementById("login-email").value = ""
    document.getElementById("login-password").value = ""
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
                <label className="email-label">Email:</label>
                <br />
                <input
                    value={email}
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={event => setEmail(event.target.value)}
                    id="login-email"
                />
                <br />
                <label className="password-label">Password:</label>
                <br />
                <input
                    value={password}
                    type="password"
                    className="form-control"
                    placeholder="Enter a password"
                    onChange={event => setPassword(event.target.value)}
                    id="login-password"
                />
                <br />
                <button type="submit" className="login-btn">Login</button>
            </div>
        </form>
    )
}

export default LoginForm;