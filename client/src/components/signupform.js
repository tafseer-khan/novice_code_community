import React, { useState } from 'react';
import Signup from "../utils/signupScript"



function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        Signup.signup(username,email,password)
    }

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