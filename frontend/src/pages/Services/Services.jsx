import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./Services.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaAngleDoubleRight, FaCity, FaHotel, FaSpa, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Contactinfo } from '../../containers';
import blog1 from "../../../../assets/blog-1.jpg";
import blog2 from "../../../../assets/blog-2.jpg";
import blog3 from "../../../../assets/blog-3.jpg";
import test from "../../../../assets/testimonial.jpg";
import test1 from "../../../../assets/testimonial-1.jpg";
import test2 from "../../../../assets/testimonial-2.jpg";
import test3 from "../../../../assets/testimonial-3.jpg";

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

const testimonials = [
    {
        id: 1,
        name: "Client Name",
        profession: "Profession",
        img: test1,
        text: "Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore."
    },
    {
        id: 2,
        name: "Client Name",
        profession: "Profession",
        img: test2,
        text: "Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore."
    },
    {
        id: 3,
        name: "Client Name",
        profession: "Profession",
        img: test3,
        text: "Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore."
    }
];

const Services = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 2;
    const totalItems = services.length;

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const visibleServices = [
        ...services.slice(startIndex, startIndex + itemsToShow),
        ...services.slice(0, Math.max(0, (startIndex + itemsToShow) - totalItems))
    ];

    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const handleTestimonialNext = () => {
        setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handleTestimonialPrev = () => {
        setTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

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
                        <div className="service-carousel">
                            <div className="arrows">
                                <FaArrowLeft className="arrow left-arrow" onClick={handlePrev} />
                                <FaArrowRight className="arrow right-arrow" onClick={handleNext} />
                            </div>
                            <div className="service-items d-flex">
                                <AnimatePresence>
                                    {visibleServices.map((service) => (
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

            <Contactinfo />

            <div className="container">
                <div className="row testimonial">
                    <div className="col-lg-7">
                        <h6 className="title-two">Testimonial</h6>
                        <h1 className="main-title">What Our Clients Say</h1>
                        <div className="testimonial-carousel">
                            <div className="arrows">
                                <FaArrowLeft className="arrow left-arrow" onClick={handleTestimonialPrev} />
                                <FaArrowRight className="arrow right-arrow" onClick={handleTestimonialNext} />
                            </div>
                            <AnimatePresence>
                                {testimonials.map((testimonial, index) => (
                                    index === testimonialIndex && (
                                        <motion.div
                                            key={testimonial.id}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.5 }}
                                            className="testimonial-item"
                                        >
                                            <div className="d-flex align-items-center">
                                                <img className="img-fluid my-4" src={testimonial.img} alt={testimonial.name} />
                                                <div>
                                                    <h5>{testimonial.name}</h5>
                                                    <i>{testimonial.profession}</i>
                                                </div>
                                            </div>
                                            <p>{testimonial.text}</p>
                                        </motion.div>
                                    )
                                ))}
                            </AnimatePresence>
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

export default Services;
