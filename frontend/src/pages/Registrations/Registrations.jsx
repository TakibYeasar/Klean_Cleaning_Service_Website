
import React from 'react';
import './Registrations.scss';

const Registrations = () => {
    return (
        <div className="registration-container">
            <h2 className="registration-title">Create a New Account</h2>
            <p className="registration-subtitle">Create your new account.</p>
            <form className="registration-form">
                <div className="form-group">
                    <label htmlFor="email">Email Address <span>*</span></label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username <span>*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password <span>*</span></label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password <span>*</span></label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                    />
                </div>
                <button type="submit" className="submit-btn">Sign Up</button>
            </form>
        </div>
    );
};

export default Registrations;
