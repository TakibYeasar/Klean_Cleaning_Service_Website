import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./Banner.scss";
import carousel1 from "../../../public/images/carousel-1.jpg";
import carousel2 from "../../../public/images/carousel-2.jpg";
import carousel3 from "../../../public/images/carousel-3.jpg";

const banners = [
    {
        id: 1,
        img: carousel1,
        title: "Cleaning Services",
        description: "Best Quality Solution In Cleaning",
    },
    {
        id: 2,
        img: carousel2,
        title: "Cleaning Services",
        description: "Highly Professional Cleaning Services",
    },
    {
        id: 3,
        img: carousel3,
        title: "Cleaning Services",
        description: "Experienced & Expert Cleaners",
    },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

    const handleDotClick = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex(prevIndex => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="banner_sec">
            <div className="banner-container">
                <div className="banner-carousel">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={banners[currentIndex].id}
                            initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
                            transition={{ duration: 0.5 }}
                            className="banner-item"
                        >
                            <div className="image-overlay"></div>
                            <img className="img-fluid" src={banners[currentIndex].img} alt="Banner" />
                            <div className="carousel-caption">
                                <div className="p-5">
                                    <h5 className="title">{banners[currentIndex].title}</h5>
                                    <h1 className="desc">{banners[currentIndex].description}</h1>
                                    <a href="" className="btn-style">Get A Quote</a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="dots-container">
                    <div className="dots">
                        {banners.map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
