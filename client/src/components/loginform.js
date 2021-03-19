import React from 'react';

function LoginForm() {

    return (
        <form className="login-form">
            <div className="form-group">
                <label className="email-label">Email:</label>
                <br />

                <input type="email"
                    className="form-control"
                    placeholder="Enter your email"
                />
                <br />
                <label className="password-label">Password:</label>
                <br />

                <input type="password"
                    className="form-control"
                    placeholder="Enter your password"

                />
                <br />
                <button type="submit" className="login-btn">Login</button>
            </div>
        </form>
    )
}

export default LoginForm;