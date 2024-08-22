import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import './Team.scss';
import team1 from "../../../public/images/team-1.jpg";
import team2 from "../../../public/images/team-2.jpg";
import team3 from "../../../public/images/team-3.jpg";
import team4 from "../../../public/images/team-4.jpg";

const teamMembers = [
    { img: team1, name: "Full Name 1", designation: "Designation 1" },
    { img: team2, name: "Full Name 2", designation: "Designation 2" },
    { img: team3, name: "Full Name 3", designation: "Designation 3" },
    { img: team4, name: "Full Name 4", designation: "Designation 4" }
];

const Team = () => {
    const [startIndex, setStartIndex] = useState(0);

    const itemsToShow = 3;
    const totalMembers = teamMembers.length;
    const visibleMembers = [
        ...teamMembers.slice(startIndex, startIndex + itemsToShow),
        ...teamMembers.slice(0, Math.max(0, (startIndex + itemsToShow) - totalMembers))
    ];

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % totalMembers);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + totalMembers) % totalMembers);
    };

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
                            <AnimatePresence>
                                {visibleMembers.map((member, index) => (
                                    <motion.div
                                        key={startIndex + index}
                                        className="team"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="position-relative ">
                                            <div className="team-img">
                                                <img className="img-fluid w-100" src={member.img} alt={member.name} />
                                            </div>
                                            <div className="team-social position-absolute">
                                                <a className="btn-social" href="#"><FaTwitter className='icon' /></a>
                                                <a className="btn-social" href="#"><FaFacebook className='icon' /></a>
                                                <a className="btn-social" href="#"><FaLinkedin className='icon' /></a>
                                            </div>
                                        </div>
                                        <div className="team-text">
                                            <h5>{member.name}</h5>
                                            <p>{member.designation}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            <button className="arrow left btn-style" onClick={handlePrev}>{"<"}</button>
                            <button className="arrow right btn-style" onClick={handleNext}>{">"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
