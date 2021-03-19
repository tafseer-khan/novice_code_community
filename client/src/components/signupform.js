import React from 'react';

function SignupForm() {

    return (
        <form className="signup-form">
            <div className="form-group">
            
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
                <br />
                <button type="submit" className="signup-btn">Sign Up</button>
            </div>
        </form>
    )
}

export default SignupForm;