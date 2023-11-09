import React from 'react';
import "./Service.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaCity, FaHotel, FaSpa } from "react-icons/fa";
import blog1 from "../../../../assets/blog-1.jpg";
import blog2 from "../../../../assets/blog-2.jpg";
import blog3 from "../../../../assets/blog-3.jpg";

const Service = () => {
    return (
        <div className="service_sec">
            <div className="background">
                <img src={blog2} className='image' />
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
        </div>
    )
}

export default Service