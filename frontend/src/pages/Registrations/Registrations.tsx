import React from 'react';
import "./Registrations.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaAngleDoubleRight } from 'react-icons/fa';

const Registrations = () => {

    return (
        <div className="registrations_sec">

            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center">
                            <h1 className="main-title">Registrations</h1>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="align-items-center">
                                <a className="btn-outline-border" href="">Home</a>
                                <FaAngleDoubleRight className="icon" />
                                <a className="btn-outline-border" href="">Registrations</a>
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
                                <div className=" col-lg-12 col-md-6 col-sm-6 create-new-account">
                                    <h4 className="checkout-subtitle">Create a new account</h4>
                                    <p className="text title-tag-line">Create your new account.</p>
                                    <form className="register-form outer-top-xs" role="form">
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputEmail2">Email Address <span>*</span></label>
                                            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail2"  placeholder="email" />
                                        </div>
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputEmail1">Username <span>*</span></label>
                                            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder="username" />
                                        </div>
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputEmail1">Password <span>*</span></label>
                                            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder="password" />
                                        </div>
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputEmail1">Confirm Password <span>*</span></label>
                                            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder="confirm_password" />
                                        </div>
                                        <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Sign Up</button>
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

export default Registrations