import React, { useState } from 'react';
const passport = require('passport-local');
const axios = require('axios');

function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="form-group">
            <label className="username-label">Username:</label>
            <br />
            <input
                type="username"
                name="username"
                className="form-control"
                placeholder="Choose a username"
                value={username}
                onChange={setUsername}
            />
            <br />
            <label className="email-label">Email:</label>
            <br />
            <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={setEmail}
            />
            <br />
            <label className="password-label">Password:</label>
            <br />
            <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter a password"
                value={password}
                onChange={setPassword}
            />
            <br />
            <button type="submit" className="signup-btn" onClick={() => [setUsername, setEmail, setPassword]}>Sign Up</button>
        </div>
        
    )
}

export default SignupForm;