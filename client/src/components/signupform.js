import React, { useState } from 'react';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Signup submitted');
    }

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <label className="username-label">Username:</label>
            <br />
            <input
                type="text"
                name={username}
                className="form-control"
                placeholder="Choose a username"
                onChange={event => setUsername(event.target.name)}
                id = "signup-username"
            />
            <br />
            <label className="email-label">Email:</label>
            <br />
            <input
                name={email}
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={event => setEmail(event.target.name)}
                id = "signup-email"
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
                id="signup-password"
            />
            <br />
            <button type="submit" className="signup-btn">Sign Up</button>
        </form>        
    )
}

export default SignupForm;