import React from 'react';
import "./Services.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaAngleDoubleRight, FaCity, FaHotel, FaSpa } from 'react-icons/fa';
import { Contactinfo } from '../../containers';
import blog1 from "../../../../assets/blog-1.jpg";
import blog2 from "../../../../assets/blog-2.jpg";
import blog3 from "../../../../assets/blog-3.jpg";
import test from "../../../../assets/testimonial.jpg";
import test1 from "../../../../assets/testimonial-1.jpg";
import test2 from "../../../../assets/testimonial-2.jpg";
import test3 from "../../../../assets/testimonial-3.jpg";

const Services = () => {
    return (
        <div className="services_sec">
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center">
                            <h1 className="main-title">Service</h1>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="align-items-center">
                                <a className="btn-outline-border" href="">Home</a>
                                <FaAngleDoubleRight className="icon" />
                                <a className="btn-outline-border" href="">Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center service-content">
                    <div className="col-lg-6">
                        <h6 className="title-two">Our Services</h6>
                        <h1 className="main-title">Awesome Cleaning Services For You</h1>
                        <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                        <a href="" className="btn-style">More Services</a>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-carousel d-flex">
                            <div className="service-item">
                                <div className="icon-box text-center">
                                    <FaHotel className='icon' />
                                    <h5>Home Cleaning</h5>
                                </div>
                                <img src={blog1} className='image' alt="" />
                            </div>
                            <div className="service-item">
                                <div className="icon-box text-center">
                                    <FaCity className='icon' />
                                    <h5>Window Cleaning</h5>
                                </div>
                                <img src={blog3} className='image' alt="" />
                            </div>
                            {/* <div className="service-item">
                                <div className="icon-box text-center">
                                    <FaSpa className='icon' />
                                <h5>Carpet Cleaning</h5>
                                </div>
                                <img src={blog2} className='image' alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <Contactinfo />

            <div className="container">
                <div className="row testimonial">
                    <div className="col-lg-7">
                        <h6 className="title-two">Testimonial</h6>
                        <h1 className="main-title">What Our Clients Say</h1>
                        <div className="testimonial-carousel">
                            <div className="testimonial-item">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid my-4" src={test1} alt="" />
                                    <div>
                                        <h5>Client Name</h5>
                                        <i>Profession</i>
                                    </div>
                                </div>
                                <p>Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor  lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.</p>
                            </div>
                            {/* <div className="testimonial-item">
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid" src={test2} alt=""/>
                                            <div>
                                                <h5>Client Name</h5>
                                                <i>Profession</i>
                                            </div>
                                    </div>
                                    <p>Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor  lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.</p>
                                </div>
                                <div className="testimonial-item">
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid" src={test3} alt=""/>
                                            <div>
                                                <h5>Client Name</h5>
                                                <i>Profession</i>
                                            </div>
                                    </div>
                                    <p>Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor  lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.</p>
                                </div> */}
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="">
                            <img className='image' src={test} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services