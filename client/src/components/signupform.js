import React, { useState } from 'react';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="signup-form">
            <div className="form-group">
                <label className="username-label">Username:</label>
                <br />
                <input className="username-input"
                    name="username"
                    value={username[name]}
                    onChange={setUsername}
                    type="text"
                    id="username"
                    placeholder="Enter a username"
                />
                <br />
                <label className="email-label">Email:</label>
                <br />
                <input className="email-input"
                    name="email"
                    value={email[name]}
                    onChange={setEmail}
                    type="text"
                    id="email"
                    placeholder="Enter your email address"
                />
                <br />
                <label className="password-label">Password:</label>
                <br />
                <input className="password-input"
                    name="password"
                    value={password[name]}
                    onChange={setPassword}
                    type="password"
                    id="password"
                    placeholder="Enter a password"
                />
                <button className="signup-btn" tabIndex="0" >Signup</button>
            </div>
        </form>
    )
}

export default SignupForm;