import React, { useState } from 'react';
import Login from "../utils/loginScript";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        Login.login(email,password)
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
                {/* <button className="login-btn" onClick={()=>Login.login()} >Login</button> */}
            </div>
        </form>
    )
}

export default LoginForm;