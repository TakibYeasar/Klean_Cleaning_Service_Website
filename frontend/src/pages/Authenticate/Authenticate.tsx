import React from 'react';
import "./Authenticate.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaAngleDoubleRight, FaFacebook, FaTwitter } from "react-icons/fa";

const Authenticate = () => {
    return (
        <div className="authenticate_sec">

            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center">
                            <h1 className="main-title">Authentication</h1>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="align-items-center">
                                <a className="btn-outline-border" href="">Home</a>
                                <FaAngleDoubleRight className="icon" />
                                <a className="btn-outline-border" href="">Authentication</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="body-content">
                    <div className="row">
                        <div className="sign-in-page">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-sm-6 sign-in">
                                    <h4 className="">Sign in</h4>
                                    <p className="">Hello, Welcome to your account.</p>
                                    <form className="register-form outer-top-xs" role="form">
                                        <div className="form-group">
                                            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder='Email Address' />
                                            <input type="password" className="form-control unicase-form-control text-input" id="exampleInputPassword1" placeholder='Password' />
                                        </div>
                                        <div className="radio outer-xs">
                                            <label>
                                                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Remember me!
                                            </label><br/>
                                            <a href="#" className="forgot-password pull-right">Forgot your Password?</a>
                                        </div>
                                        <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authenticate