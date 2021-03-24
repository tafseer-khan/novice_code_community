import React, { useState } from 'react';
import { useAtom } from "jotai";
import { usernameG } from "../Atoms"
import {loggedIn} from "../Atoms"
import axios from "axios";




function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [whatIsTheUsername, retrieveUsername] = useAtom(usernameG)
    const [areWeLoggedIn, loggedInCheck] = useAtom(loggedIn)

    const handleSubmit =async (event) => {
        event.preventDefault();
        const newUser = {
            username: username,
            password: password,
            email: email
        };
        axios.post("/api/user/createUser", {
            newUser
        }).then(res => {

            if(res.data.error == "email in use"){
                alert("Email has already been registered")
            }
            else if(res.data.error == "username in use"){
                alert("Username has already been registered, please choose a different username")
            }
            else{
                console.log("Account Signed Up")
                axios.post("/api/user/login",{
                    email: email,
                    password:password
                })                
                .then(()=>{(axios.get("/api/user/user_data"))
                .then(()=>{retrieveUsername(res.data.username);
                 loggedInCheck(true)})
            })
            console.log(res.data.username + " has logged in")
            document.getElementById("signup-username").value = ""
            document.getElementById("signup-email").value = ""
            document.getElementById("signup-password").value = ""
            document.getElementById("login-email").value = ""
            document.getElementById("login-password").value = ""
            // return theusername
            //insert state change here
            }})}

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <label className="username-label">Username:</label>
            <br />
            <input
                type="username"
                value={username}
                className="form-control"
                placeholder="Choose a username"
                id = "signup-username"
                onChange={event => setUsername(event.target.value)}
            />
            <br />
            <label className="email-label">Email:</label>
            <br />
            <input
                   value={email}
                   type="email"
                   className="form-control"
                   placeholder="Enter your email"
                   onChange={event => setEmail(event.target.value)}
                   id="signup-email"
            />
            <br />
            <label className="password-label">Password:</label>
            <br />
            <input
                value={password}
                type="password"
                className="form-control"
                placeholder="Enter a password"
                id="signup-password"
                onChange={event => setPassword(event.target.value)}
            />
            <br />
            <button type="submit" className="signup-btn">Sign Up</button>
            {/* <button className="signup-btn" onClick={()=>Signup.signup()} >Sign Up</button> */}
        </form>
        
    )
}

export default SignupForm;