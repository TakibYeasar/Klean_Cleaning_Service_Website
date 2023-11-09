import React from 'react';
import "./Banner.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import carousel1 from "../../../../assets/carousel-1.jpg";
import carousel2 from "../../../../assets/carousel-2.jpg";
import carousel3 from "../../../../assets/carousel-3.jpg";

const Banner = () => {
    return (
        <div className="banner_sec">
            <div className="header-carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="img-fluid" src={carousel1} alt="Image" />
                        <div className="carousel-caption">
                            <div className="p-5">
                                <h5 className="title">Cleaning Services</h5>
                                <h1 className="desc">Best Quality Solution In Cleaning</h1>
                                <a href="" className="btn-style">Get A Quote</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid" src={carousel2} alt="Image" />
                        <div className="carousel-caption">
                            <div className="p-5">
                                <h5 className="title">Cleaning Services</h5>
                                <h1 className="desc">Highly Professional Cleaning Services</h1>
                                <a href="" className="btn-style">Get A Quote</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid" src={carousel3} alt="Image" />
                        <div className="carousel-caption">
                            <div className="p-5">
                                <h5 className="title">Cleaning Services</h5>
                                <h1 className="desc">Experienced & Expert Cleaners</h1>
                                <a href="" className="btn-style">Get A Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner