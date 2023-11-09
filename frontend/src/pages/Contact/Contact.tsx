import React from 'react';
import "./Contact.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaAngleDoubleRight } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact_sec">
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center">
                            <h1 className="main-title">Contact</h1>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="align-items-center">
                                <a className="btn-outline-border" href="">Home</a>
                                <FaAngleDoubleRight className="icon" />
                                <a className="btn-outline-border" href="">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row contact align-items-center">
                    <div className="col-lg-6">
                        <h6 className="title-two text-uppercase mb-3">Contact Us</h6>
                        <h1 className="main-title">Contact Us For Cleaning Services</h1>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="font-weight-normal text-muted mb-3">Eirmod kasd duo eos et magna, diam dolore stet sea clita sit ea erat lorem. Ipsum eos ipsum magna lorem stet</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-7">
                        <div className="contact-form">
                            <div id="success"></div>

                            <form>
                                <div className="form-row d-flex">
                                    <div className="col-sm-6 control-group">
                                        <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="col-sm-6 control-group">
                                        <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control p-4" rows={6} id="message" placeholder="Message" required data-validation-required-message="Please enter your message"></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn-style" type="submit">Send Message</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact