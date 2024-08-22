import React from 'react';
import "./Contactinfo.scss";
import { FaEnvelopeOpen, FaMapMarker, FaPhone } from "react-icons/fa";

const Contactinfo = () => {
    return (
        <div className="contactinfo_sec">
            <div className="contact-info d-flex">
                <div className="col-lg-4 p-0">
                    <div className="contact-info-item d-flex">
                        <FaMapMarker className='icon' />
                        <div>
                            <h5 className="mb-2">Our Office</h5>
                            <p className="m-0">123 Street, New York, USA</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 p-0">
                    <div className="contact-info-item d-flex middle-item">
                        <FaEnvelopeOpen className='icon' />
                        <div>
                            <h5 className="mb-2">Email Us</h5>
                            <p className="m-0">info@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 p-0">
                    <div className="contact-info-item d-flex">
                        <FaPhone className='icon' />
                        <div>
                            <h5 className="mb-2">Call Us</h5>
                            <p className="m-0">+012 345 6789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactinfo;
