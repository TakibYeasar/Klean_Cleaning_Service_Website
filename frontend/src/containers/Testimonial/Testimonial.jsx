import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./Testimonial.scss";
import bg from "../../../public/assets/carousel-3.jpg";
import test from "../../../public/assets/testimonial.jpg";
import test1 from "../../../public/assets/testimonial-1.jpg";
import test2 from "../../../public/assets/testimonial-2.jpg";
import test3 from "../../../public/assets/testimonial-3.jpg";

const testimonials = [
    {
        id: 1,
        img: test1,
        name: "Client Name",
        profession: "Profession",
        feedback: "Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore."
    },
    {
        id: 2,
        img: test2,
        name: "Client Name",
        profession: "Profession",
        feedback: "Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore."
    },
    {
        id: 3,
        img: test3,
        name: "Client Name",
        profession: "Profession",
        feedback: "Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore."
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="testimonial_sec">
            <div className="background">
                <img className='image' src={bg} alt="background" />
            </div>

            <div className="container">
                <div className="row testimonial">
                    <div className="col-lg-7">
                        <h6 className="title-two">Testimonial</h6>
                        <h1 className="main-title">What Our Clients Say</h1>

                        <div className="testimonial-carousel">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={testimonials[currentIndex].id}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    className="testimonial-item"
                                >
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid my-4" src={testimonials[currentIndex].img} alt="client" />
                                        <div>
                                            <h5>{testimonials[currentIndex].name}</h5>
                                            <i>{testimonials[currentIndex].profession}</i>
                                        </div>
                                    </div>
                                    <p>{testimonials[currentIndex].feedback}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="dots">
                            {testimonials.map((_, index) => (
                                <span
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                ></span>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="">
                            <img className='image' src={test} alt="testimonial" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
