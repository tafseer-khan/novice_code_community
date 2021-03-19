import React from 'react';

function LoginForm() {

    return (
        <form className="login-form">
            <div className="form-group">
                <label className="email-label">Email:</label>
                <br />
<<<<<<< HEAD
                <input type="email"
                    className="form-control"
                    placeholder="Enter your email"
=======
                <input className="email-input"
                    name="email"
                    value={email[name]}
                    onChange={setEmail}
                    type="text"
                    id="email"
                    placeholder="Enter your email address"
>>>>>>> de5b57f699424cd784d975abc640b0039bfeddbe
                />
                <br />
                <label className="password-label">Password:</label>
                <br />
<<<<<<< HEAD
                <input type="password"
                    className="form-control"
                    placeholder="Enter your password"
=======
                <input className="password-input"
                    name="password"
                    value={password[name]}
                    onChange={setPassword}
                    type="password"
                    id="password"
                    placeholder="Enter a password"
>>>>>>> de5b57f699424cd784d975abc640b0039bfeddbe
                />
                <br />
                <button type="submit" className="login-btn">Login</button>
            </div>
        </form>
    )
}

export default LoginForm;