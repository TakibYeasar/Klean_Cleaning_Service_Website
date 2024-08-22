import React from 'react';
import "./Blog.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import blog1 from "../../../public/images/blog-1.jpg";
import blog2 from "../../../public/images/blog-2.jpg";
import blog3 from "../../../public/images/blog-3.jpg";

const Blog = () => {
    return (
        <div className="blog_sec">
            <div className="container">

                <h6 className="title-two">Latest Blog</h6>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <h1 className="main-title">Latest Articles From Our Blog Post</h1>
                    </div>
                    <div className="col-lg-6">
                        <p>Eirmod kasd duo eos et magna, diam dolore stet sea clita sit ea erat lorem. Ipsum eos ipsum magna lorem stet</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-5 blog-item">
                        <div className="position-relative mb-4 blog_heading">
                            <img className="img-fluid" src={blog1} alt="" />
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
                        <h5>Rebum lorem eos ipsum diam</h5>
                        <p className="mb-4">Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet</p>
                        <a className="btn-style" href="/blogdetails">Read More</a>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5 blog-item">
                        <div className="position-relative mb-4 blog_heading">
                            <img className="img-fluid" src={blog2} alt="" />
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
                        <h5>Rebum lorem eos ipsum diam</h5>
                        <p className="mb-4">Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet</p>
                        <a className="btn-style" href="/blogdetails">Read More</a>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5 blog-item">
                        <div className="position-relative mb-4 blog_heading">
                            <img className="img-fluid" src={blog3} alt="" />
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
                        <h5>Rebum lorem eos ipsum diam</h5>
                        <p className="mb-4">Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet</p>
                        <a className="btn-style" href="/blogdetails">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog