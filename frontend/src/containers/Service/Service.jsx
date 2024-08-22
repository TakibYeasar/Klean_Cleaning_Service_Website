import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./Service.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaCity, FaHotel, FaSpa, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import blog1 from "../../../public/images/blog-1.jpg";
import blog2 from "../../../public/images/blog-2.jpg";
import blog3 from "../../../public/images/blog-3.jpg";

const services = [
    {
        id: 1,
        icon: <FaHotel className='icon' />,
        title: "Home Cleaning",
        img: blog1
    },
    {
        id: 2,
        icon: <FaCity className='icon' />,
        title: "Window Cleaning",
        img: blog3
    },
    {
        id: 3,
        icon: <FaSpa className='icon' />,
        title: "Carpet Cleaning",
        img: blog2
    }
];

const Service = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 2;
    const totalItems = services.length;

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const visibleItems = [
        ...services.slice(startIndex, startIndex + itemsToShow),
        ...services.slice(0, Math.max(0, (startIndex + itemsToShow) - totalItems))
    ];

    return (
        <div className="service_sec">
            <div className="background">
                <img src={blog2} className='image' alt="Background" />
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
                        <div className="service-carousel">
                            <div className="arrows">
                                <FaArrowLeft className="arrow left-arrow" onClick={handlePrev} />
                                <FaArrowRight className="arrow right-arrow" onClick={handleNext} />
                            </div>
                            <div className="service-items d-flex">
                                <AnimatePresence>
                                    {visibleItems.map((service) => (
                                        <motion.div
                                            key={service.id}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.5 }}
                                            className="service-item"
                                        >
                                            <div className="icon-box text-center">
                                                {service.icon}
                                                <h5>{service.title}</h5>
                                            </div>
                                            <img src={service.img} className='image' alt={service.title} />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
