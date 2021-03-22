import React from 'react';
const passport = require('passport-local');
const axios = require('axios');

function SignupForm() {
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleInputChange = event => {
    //     const { username, value } = event.target;
    //     const { email, value } = event.target;
    //     const { password, value } = event.target;
    // }

    return (
        <div className="form-group">
            <label className="username-label">Username:</label>
            <br />
            <input
                type="username"
                name="username"
                className="form-control"
                placeholder="Choose a username"
                // value={username}
                // onChange={handleInputChange}
            />
            <br />
            <label className="email-label">Email:</label>
            <br />
            <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                // value={email}
                // onChange={handleInputChange}
            />
            <br />
            <label className="password-label">Password:</label>
            <br />
            <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter a password"
                // value={password}
                // onChange={handleInputChange}
            />
            <br />
            {/* <button type="submit" className="signup-btn" onClick={() => [setUsername, setEmail, setPassword]}>Sign Up</button> */}
            <button type="submit" className="signup-btn">Sign Up</button>
        </div>
        
    )
}

export default SignupForm;