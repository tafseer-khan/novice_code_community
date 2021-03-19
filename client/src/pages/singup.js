import React, { useState } from 'react';
import SignupBtn from '../components/signupbtn';

function Signup() {
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
                    value={username}
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
                    value={email}
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
                    value={password}
                    onChange={setPassword}
                    type="text"
                    id="password"
                    placeholder="Enter a password"
                />
            </div>
            <SignupBtn />
        </form>
    )
}

export default Signup;