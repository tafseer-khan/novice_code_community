import React from 'react';

function LoginForm() {

    return (
        <form className="login-form">
            <div className="form-group">
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
                <br />
                <button type="submit" className="login-btn">Login</button>
            </div>
        </form>
    )
}

export default LoginForm;