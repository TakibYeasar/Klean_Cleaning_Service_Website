
import React from 'react';
import './Authenticate.scss';

const Authenticate = () => {
    return (
        <div className="auth-container">
            <h2 className="auth-title">Sign In</h2>
            <p className="auth-subtitle">Hello, Welcome to your account.</p>
            <form className="auth-form">
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div className="form-options">
                    <label>
                        <input type="checkbox" id="rememberMe" />
                        Remember me!
                    </label>
                    <a href="#" className="forgot-password">Forgot your Password?</a>
                </div>
                <button type="submit" className="submit-btn">Login</button>
            </form>
        </div>
    );
};

export default Authenticate;
