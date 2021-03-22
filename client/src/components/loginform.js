import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login submitted');
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
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
                    onChange={event => setPassword(event.target.name)}
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