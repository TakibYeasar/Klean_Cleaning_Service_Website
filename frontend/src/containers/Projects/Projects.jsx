import React from 'react';
import "./Projects.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaEye, FaLink } from "react-icons/fa";
import bg from "../../../public/images/carousel-2.jpg";
import port1 from "../../../public/images/portfolio-1.jpg";
import port2 from "../../../public/images/portfolio-2.jpg";
import port3 from "../../../public/images/portfolio-3.jpg";
import port4 from "../../../public/images/portfolio-4.jpg";
import port5 from "../../../public/images/portfolio-5.jpg";
import port6 from "../../../public/images/portfolio-6.jpg";

const projectdata = [
    {
        image: port1,
        title: "Portfolio title",
    },
    {
        image: port2,
        title: "Portfolio title",
    },
    {
        image: port3,
        title: "Portfolio title",
    },
    {
        image: port4,
        title: "Portfolio title",
    },
    {
        image: port5,
        title: "Portfolio title",
    },
    {
        image: port6,
        title: "Portfolio title",
    },
]

const Projects = () => {
    return (
        <div className="projects_sec">

            <div className="background">
                <img className='image' src={bg} />
            </div>

            <div className="container">
                <div className="row portfolio-container">

                    {projectdata.map((item, i) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item" key={i}>
                            <div className="position-relative">
                                <div className="portfolio-img">
                                    <img src={item?.image} alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <h4 className="title">{item?.title}</h4>
                                    <div className="d-flex align-items-center">
                                        <a className="btn-sm" href="">
                                            <FaLink className='icon' />
                                        </a>
                                        <a className="btn-sm" href={item?.image}>
                                            <FaEye className='icon' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Projects