import React, { useState, useEffect } from 'react';
import "./About.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import about_img from "../../../public/assets/blog-2.jpg";
import { FaAward } from 'react-icons/fa';

const About = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const targetCount = 25;
        const duration = 2000;
        const intervalTime = 50;
        const steps = Math.ceil(duration / intervalTime);
        const increment = targetCount / steps;

        let currentCount = 0;
        const interval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= targetCount) {
                clearInterval(interval);
                setCount(targetCount);
            } else {
                setCount(Math.floor(currentCount));
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about_sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 bg-about">
                        <img className='image' src={about_img} alt="About" />
                        <div className="bg-about-text text-center">
                            <FaAward className="icon" />
                            <h1>{count}</h1>
                            <h2>Years Experience</h2>
                        </div>
                    </div>
                    <div className="col-lg-7 about-content">
                        <h6 className="title-two">Learn About Us</h6>
                        <h1 className="main-title">We Provide The Best Cleaning Services</h1>
                        <h5>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea lorem justo est dolor eos</h5>
                        <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>

                        <a href="" className="btn-style">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
