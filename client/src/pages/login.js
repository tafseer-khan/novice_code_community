import React, { useState } from 'react';
import LoginBtn from '../components/loginbtn';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="login-form">
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
                <br />
            </div>
            <LoginBtn />
        </form>
    )
}

export default Login;