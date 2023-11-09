import React from 'react';
import "./Testimonial.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import bg from "../../../../assets/carousel-3.jpg";
import test from "../../../../assets/testimonial.jpg";
import test1 from "../../../../assets/testimonial-1.jpg";
import test2 from "../../../../assets/testimonial-2.jpg";
import test3 from "../../../../assets/testimonial-3.jpg";

const Testimonial = () => {
    return (
        <div className="testimonial_sec">

            <div className="background">
                <img className='image' src={bg} />
            </div>

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

export default Testimonial