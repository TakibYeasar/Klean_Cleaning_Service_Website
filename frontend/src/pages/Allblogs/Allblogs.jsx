import React, { useState } from 'react';
import "./Allblogs.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import blog1 from "../../../public/assets/blog-1.jpg";
import blog2 from "../../../public/assets/blog-2.jpg";
import blog3 from "../../../public/assets/blog-3.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";

const blog = [
    {
        image: blog1,
        title: "Rebum lorem eos ipsum diam",
        desc: "Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet",
    },
    {
        image: blog2,
        title: "Rebum lorem eos ipsum diam",
        desc: "Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet",
    },
    {
        image: blog3,
        title: "Rebum lorem eos ipsum diam",
        desc: "Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet",
    },
    {
        image: blog1,
        title: "Rebum lorem eos ipsum diam",
        desc: "Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet",
    },
    {
        image: blog2,
        title: "Rebum lorem eos ipsum diam",
        desc: "Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet",
    },
    {
        image: blog3,
        title: "Rebum lorem eos ipsum diam",
        desc: "Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet",
    },
];

const ITEMS_PER_PAGE = 3;

const Allblogs = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blog.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlogs = blog.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="allblogs_sec">
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center">
                            <h1 className="main-title">Blog</h1>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="align-items-center">
                                <a className="btn-outline-border" href="">Home</a>
                                <FaAngleDoubleRight className='icon' />
                                <a className="btn-outline-border" href="">Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h6 className="main-title">Latest Blog</h6>
                        <h1 className="section-title">Latest Articles From Our Blog Post</h1>
                    </div>
                    <div className="col-lg-6">
                        <h4>Eirmod kasd duo eos et magna, diam dolore stet sea clita sit ea erat lorem. Ipsum eos ipsum magna lorem stet</h4>
                    </div>
                </div>

                <div className="row">
                    {currentBlogs.map((item, i) => (
                        <div className="col-lg-4 col-md-6 blog-item" key={i}>
                            <div className="position-relative mb-4 blog_heading">
                                <img className="img-fluid" width={100} src={item?.image} alt="" />
                                <div className="blog-date">
                                    <h4>01</h4>
                                    <small>Jan</small>
                                </div>
                            </div>
                            <div className="d-flex mb-2 blog_content">
                                <a href="">Admin</a>
                                <span>|</span>
                                <a href="">Cleaning</a>
                            </div>
                            <h5 className="title">{item?.title}</h5>
                            <p className="mb-4">{item?.desc}</p>
                            <a className="btn-style" href="/blogdetails">Read More</a>
                        </div>
                    ))}
                    <div className="col-12">
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <a className="page-link" href="#" onClick={() => handlePageChange(currentPage - 1)}>
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                    <a className="page-link" href="#" onClick={() => handlePageChange(index + 1)}>
                                        {index + 1}
                                    </a>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                <a className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allblogs;
