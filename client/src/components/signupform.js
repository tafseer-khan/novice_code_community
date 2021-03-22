import React, { useState } from 'react';
import Signup from "../utils/signupScript"



function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Signup submitted');
    // }

    return (
        <form className="form-group">
            <label className="username-label">Username:</label>
            <br />
            <input
                type="username"
                name={username}
                className="form-control"
                placeholder="Choose a username"
                id = "signup-username"
                onChange={event => setUsername(event.target.name)}
            />
            <br />
            <label className="email-label">Email:</label>
            <br />
            <input
                   name={email}
                   type="email"
                   className="form-control"
                   placeholder="Enter your email"
                   onChange={event => setEmail(event.target.name)}
                   id="login-email"
            />
            <br />
            <label className="password-label">Password:</label>
            <br />
            <input
                name={password}
                type="password"
                className="form-control"
                placeholder="Enter a password"
                id="signup-password"
                onChange={event => setPassword(event.target.name)}
            />
            <br />
            {/* <button type="submit" className="signup-btn">Sign Up</button> */}
            <button className="signup-btn" onClick={()=>Signup.signup()} >Sign Up</button>
        </form>
        
    )
}

export default SignupForm;