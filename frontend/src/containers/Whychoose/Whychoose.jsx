import React from 'react';
import CountUp from 'react-countup';
import "./Whychoose.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import feature from "../../../../assets/feature.jpg";

const Whychoose = () => {
    return (
        <div className="whychoose_sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h6 className="title-two">Why Choose Us</h6>
                        <h1 className="main-title">25 Years Experience In Cleaning Industry</h1>
                        <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                        <div className="row feature">
                            <div className="col-sm-4">
                                <h1>
                                    <CountUp end={225} duration={3} />
                                </h1>
                                <h6>Our Cleaners</h6>
                            </div>
                            <div className="col-sm-4">
                                <h1>
                                    <CountUp end={1050} duration={3} />
                                </h1>
                                <h6>Happy Clients</h6>
                            </div>
                            <div className="col-sm-4">
                                <h1>
                                    <CountUp end={2500} duration={3} />
                                </h1>
                                <h6>Projects Done</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div>
                            <img className='image' src={feature} alt="Feature" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whychoose;
