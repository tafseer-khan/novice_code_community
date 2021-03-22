import React, { useState } from 'react';
const passport = require('passport-local');
const axios = require('axios');

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="login-form">
            <div className="form-group">
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
                <button type="submit" className="login-btn">Login</button>
            </div>
        </form>
    )
}

export default LoginForm;