import React, { useState } from 'react';

function SignupForm(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Signed up');
    }

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <label className="username-label">Username:</label>
            <br />
            <input
                type="text"
                // name="username"
                className="form-control"
                placeholder="Choose a username"
                value={name}
                onChange={event => setUsername(event.target.value)}
            />
            <br />
            <label className="email-label">Email:</label>
            <br />
            <input
                // name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={name}
                onChange={event => setEmail(event.target.value)}
            />
            <br />
            <label className="password-label">Password:</label>
            <br />
            <input
                // name="password"
                type="password"
                className="form-control"
                placeholder="Enter a password"
                value={name}
                onChange={event => setPassword(event.target.value)}
            />
            <br />
            <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        
    )
}

export default SignupForm;