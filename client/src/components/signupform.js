import React from 'react';

function SignupForm() {

    return (
        <form className="signup-form">
            <div className="form-group">
                <label className="username-label">Username:</label>
                <br />
<<<<<<< HEAD
                <input type="username"
                    className="form-control"
                    placeholder="Choose a username"
=======
                <input className="username-input"
                    name="username"
                    value={username[name]}
                    onChange={setUsername}
                    type="text"
                    id="username"
                    placeholder="Enter a username"
>>>>>>> de5b57f699424cd784d975abc640b0039bfeddbe
                />
                <br />
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
=======
                <input className="password-input"
                    name="password"
                    value={password[name]}
                    onChange={setPassword}
                    type="password"
                    id="password"
>>>>>>> de5b57f699424cd784d975abc640b0039bfeddbe
                    placeholder="Enter a password"
                />
                <br />
                <button type="submit" className="signup-btn">Sign Up</button>
            </div>
        </form>
    )
}

export default SignupForm;