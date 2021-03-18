import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // function handleChange(e) {
    //     setEmail(e.target.value)
    // }

    return (
        <form className="login-form">
            <div className="form-group">
                <label className="email-label">Email:</label>
                <br />
                <input className="email-input"
                    name=""
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
                    name=""
                    value={password}
                    onChange={setPassword}
                    type="text"
                    id="password"
                    placeholder="Enter a password"
                />
                <br />
                <button className="login-btn" tabIndex="0" >Login</button>
            </div>
        </form>
    )
}

export default LoginForm;