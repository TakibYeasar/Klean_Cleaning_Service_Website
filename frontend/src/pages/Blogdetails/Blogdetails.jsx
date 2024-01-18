import React from 'react';
import "./Blogdetails.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaAngleDoubleRight, FaAngleRight } from "react-icons/fa";
import carousel1 from "../../../../assets/carousel-1.jpg";
import user from "../../../../assets/user.jpg";
import blog1 from "../../../../assets/blog-1.jpg";
import blog2 from "../../../../assets/blog-2.jpg";
import blog3 from "../../../../assets/blog-3.jpg";

const Blogdetails = () => {
    return (
        <div className="blogdetails_sec">
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center">
                            <h1 className="main-title">Blog Details</h1>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="align-items-center">
                                <a className="btn-outline-border" href="">Home</a>
                                <FaAngleDoubleRight className='icon' />
                                <a className="btn-outline-border" href="">Details Page</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 details">
                        <div className="mb-5">
                            <div className="d-flex mb-2 admin">
                                <a href="">Admin</a>
                                <span>|</span>
                                <a href="">Cleaning</a>
                                <span>|</span>
                                <a href="">January 01, 2045</a>
                            </div>
                            <h1 className="section-title mb-3">Amet sit kasd ipsum lorem clita ipsum duo clita</h1>
                        </div>

                        <div className="mb-5">
                            <img className='img-fluid' src={carousel1} alt="Image" />
                            <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem.
                                Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam
                                consetetur
                                eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores
                                et,
                                consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam
                                nonumy, gubergren sit stet no diam kasd vero.</p>
                            <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet
                                consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores,
                                sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et.
                                Consetetur
                                no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et
                                no
                                diam sit. Dolor erat justo dolore sit invidunt.</p>
                            <h2 className="mb-4">Est dolor lorem et ea</h2>
                            <img src={blog1} alt="Image" />
                            <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at
                                est
                                sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed
                                rebum
                                eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy
                                diam
                                lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren
                                erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores
                                takimata
                                dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam
                                eirmod
                                kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata
                                kasd
                                diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren
                                ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est
                                accusam labore eirmod vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna
                                eos
                                magna, justo gubergren labore sit voluptua eos.</p>
                            <h3 className="mb-4">Est dolor lorem et ea</h3>
                            <img src={blog2} alt="Image" />
                            <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at
                                est
                                sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed
                                rebum
                                eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy
                                diam
                                lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren
                                erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores
                                takimata
                                dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam
                                eirmod
                                kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata
                                kasd
                                diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren
                                ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est
                                accusam labore eirmod vero et voluptua. Amet labore clita duo et no.</p>
                        </div>

                        <div className="mb-5">
                            <h3 className="section-title">3 Comments</h3>
                            <div className="media mb-4">
                                <img src={user} alt="Image" />
                                <div className="media-body">
                                    <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                    <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum clita, at tempor amet ipsum diam tempor sit.</p>
                                    <button className="btn-outline-border">Reply</button>
                                </div>
                            </div>
                            <div className="media mb-4">
                                <img src={user} alt="Image" />
                                <div className="media-body">
                                    <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                    <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum clita, at tempor amet ipsum diam tempor sit.</p>
                                    <button className="btn-outline-border">Reply</button>
                                    <div className="media mt-4">
                                        <img src={user} alt="Image" />
                                        <div className="media-body">
                                            <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                            <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum clita, at tempor amet ipsum diam tempor sit.</p>
                                            <button className="btn-outline-border">Reply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="comments_section">
                            <h3 className="section-title">Leave a comment</h3>
                            <form>
                                <div className="form-row d-flex">
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="name">Name *</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="email">Email *</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="website">Website</label>
                                    <input type="url" className="form-control" id="website" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" cols={30} rows={5} className="form-control"></textarea>
                                </div>
                                <div className="form-group mb-0">
                                    <input type="submit" value="Leave Comment" className="btn-style" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-4 right_section">
                        <div className="author">
                            <img src={user} className='img-fluid' />
                            <h3>John Doe</h3>
                            <p>Conset elitr erat vero dolor ipsum et diam, eos dolor lorem ipsum,
                                ipsum
                                ipsum sit no ut est. Guber ea ipsum erat kasd amet est elitr ea sit.</p>
                        </div>
                        <div className="mb-5">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Keyword" />
                                    <div className="input-group-append">
                                        <button className="btn-style">Search</button>
                                    </div>
                                </div>
                        </div>

                        <div className="categories">
                            <h3 className="section-title">Categories</h3>
                            <ul className="list-inline">
                                <li className="d-flex align-items-center">
                                    <a href="#"><FaAngleRight className='icon' />Web Design</a>
                                    <span>150</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <a href="#"><FaAngleRight className='icon' />Web Development</a>
                                    <span>131</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <a href="#"><FaAngleRight className='icon' />Online Marketing</a>
                                    <span>78</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <a href="#"><FaAngleRight className='icon' />Keyword Research</a>
                                    <span>56</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <a href="#"><FaAngleRight className='icon' />Email Marketing</a>
                                    <span>98</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-5">
                            <img src={blog1} alt="" />
                        </div>

                        <div className="mb-5 recent_post">
                            <h3 className="section-title">Recent Post</h3>
                            <div className="d-flex align-items-center post_item">
                                <img src={blog1} alt="" />
                                <div className="post_content">
                                    <a href="">Elitr diam amet sit elitr magna ipsum ipsum dolor</a>
                                    <div className="d-flex admin">
                                        <small><a href="">Admin</a></small>
                                        <small>|</small>
                                        <small><a href="">Cleaning</a></small>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center post_item">
                                <img src={blog2} alt="" />
                                <div className="post_content">
                                    <a href="">Elitr diam amet sit elitr magna ipsum ipsum dolor</a>
                                    <div className="d-flex admin">
                                        <small><a href="">Admin</a></small>
                                        <small>|</small>
                                        <small><a href="">Cleaning</a></small>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center post_item">
                                <img src={blog3} alt="" />
                                <div className="post_content">
                                    <a href="">Elitr diam amet sit elitr magna ipsum ipsum dolor</a>
                                    <div className="d-flex admin">
                                        <small><a href="">Admin</a></small>
                                        <small>|</small>
                                        <small><a href="">Cleaning</a></small>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center post_item">
                                <img src={blog1} alt="" />
                                <div className="post_content">
                                    <a href="">Elitr diam amet sit elitr magna ipsum ipsum dolor</a>
                                    <div className="d-flex admin">
                                        <small><a href="">Admin</a></small>
                                        <small>|</small>
                                        <small><a href="">Cleaning</a></small>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center post_item">
                                <img src={blog2} alt="" />
                                <div className="post_content">
                                    <a href="">Elitr diam amet sit elitr magna ipsum ipsum dolor</a>
                                    <div className="d-flex admin">
                                        <small><a href="">Admin</a></small>
                                        <small>|</small>
                                        <small><a href="">Cleaning</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <img src={blog2} alt="" />
                        </div>

                        <div className="mb-5 tag">
                            <h3 className="section-title">Tag Cloud</h3>
                            <div className="d-flex flex-wrap">
                                <a href="" className="btn-outline-border">Design</a>
                                <a href="" className="btn-outline-border">Development</a>
                                <a href="" className="btn-outline-border">Marketing</a>
                                <a href="" className="btn-outline-border">SEO</a>
                                <a href="" className="btn-outline-border">Writing</a>
                                <a href="" className="btn-outline-border">Consulting</a>
                            </div>
                        </div>
                        <div className="mb-5">
                            <img src={blog3} alt="" />
                        </div>
                        <div>
                            <h3 className="section-title">Plain Text</h3>
                            Aliquyam sed lorem stet diam dolor sed ut sit. Ut sanctus erat ea est aliquyam dolor et. Et no
                            consetetur eos labore ea erat voluptua et. Et aliquyam dolore sed erat. Magna sanctus sed eos
                            tempor
                            rebum dolor, tempor takimata clita sit et elitr ut eirmod.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogdetails