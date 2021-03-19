import React from 'react';

function SignupForm() {

    return (
        <div className="form-group">
            <label className="username-label">Username:</label>
            <br />

            <input type="username"
                className="form-control"
                placeholder="Choose a username"

            />
            <br />
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

                placeholder="Enter a password"
            />
            <br />
            <button type="submit" className="signup-btn">Sign Up</button>
        </div>
        
    )
}

export default SignupForm;