import React from 'react';
import "./Team.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import team1 from "../../../../assets//team-1.jpg";
import team2 from "../../../../assets//team-2.jpg";
import team3 from "../../../../assets//team-3.jpg";
import team4 from "../../../../assets//team-4.jpg";

const Team = () => {
    return (
        <div className="team_sec">
            <div className="container">
                <h6 className="title-two">Meet Our Team</h6>
                <div className="row flex align-items-center">
                    <div className="col-lg-6">
                        <h1 className="main-title">Meet Our Highly Experienced Cleaners</h1>
                    </div>
                    <div className="col-lg-6">
                        <p>Eirmod kasd duo eos et magna, diam dolore stet sea clita sit ea erat lorem. Ipsum eos ipsum magna lorem stet</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="team-carousel d-flex">

                            <div className="team">
                                <div className="position-relative">
                                    <div className="team-img">
                                        <img className="img-fluid" src={team1} alt="" />
                                    </div>
                                    <div className="team-social position-absolute">
                                        <a className="btn-social" href="#"><FaTwitter className='icon' /></a>
                                        <a className="btn-social" href="#"><FaFacebook className='icon' /></a>
                                        <a className="btn-social" href="#"><FaLinkedin className='icon' /></a>
                                    </div>
                                </div>
                                <div className="team-text">
                                    <h5>Full Name</h5>
                                    <p>Designation</p>
                                </div>
                            </div>
                            <div className="team">
                                <div className="position-relative">
                                    <div className="team-img">
                                        <img className="img-fluid w-100" src={team2} alt="" />
                                    </div>
                                    <div className="team-social position-absolute">
                                        <a className="btn-social" href="#"><FaTwitter className='icon' /></a>
                                        <a className="btn-social" href="#"><FaFacebook className='icon' /></a>
                                        <a className="btn-social" href="#"><FaLinkedin className='icon' /></a>
                                    </div>
                                </div>
                                <div className="team-text">
                                    <h5>Full Name</h5>
                                    <p>Designation</p>
                                </div>
                            </div>
                            <div className="team">
                                <div className="position-relative">
                                    <div className="team-img">
                                        <img className="img-fluid w-100" src={team3} alt="" />
                                    </div>
                                    <div className="team-social position-absolute">
                                        <a className="btn-social" href="#"><FaTwitter className='icon' /></a>
                                        <a className="btn-social" href="#"><FaFacebook className='icon' /></a>
                                        <a className="btn-social" href="#"><FaLinkedin className='icon' /></a>
                                    </div>
                                </div>
                                <div className="team-text">
                                    <h5>Full Name</h5>
                                    <p>Designation</p>
                                </div>
                            </div>
                            <div className="team">
                                <div className="position-relative">
                                    <div className="team-img">
                                        <img className="img-fluid w-100" src={team4} alt="" />
                                    </div>
                                    <div className="team-social position-absolute">
                                        <a className="btn-social" href="#"><FaTwitter className='icon' /></a>
                                        <a className="btn-social" href="#"><FaFacebook className='icon' /></a>
                                        <a className="btn-social" href="#"><FaLinkedin className='icon' /></a>
                                    </div>
                                </div>
                                <div className="team-text">
                                    <h5>Full Name</h5>
                                    <p>Designation</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team