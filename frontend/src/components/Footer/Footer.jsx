import React from 'react';
import "./Footer.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaAngleRight, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarker, FaPhone, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer_sec">
      <div className="container">
        
        <div className="row">

          <div className="col-lg-3 col-md-6 mb-5">
            <a href="/" className="navbar-brand">
              <h1>Klean</h1>
            </a>
            <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
            <h5 className="title">Opening Hours:</h5>
            <p>Mon – Sat, 8AM – 5PM</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="col-lg-3 col-md-6 mb-5 services">
            <h4 className="main-title">Get In Touch</h4>
            <p><FaMapMarker className='icon' />123 Street, New York, USA</p>
            <p><FaPhone className='icon' />+012 345 67890</p>
            <p><FaEnvelope className='icon' />info@example.com</p>
            <div className="d-flex">
              <a className="btn-social" href="#"><FaTwitter className='icon' /></a>
              <a className="btn-social" href="#"><FaFacebook className='icon' /></a>
              <a className="btn-social" href="#"><FaLinkedin className='icon' /></a>
              <a className="btn-social" href="#"><FaInstagram className='icon' /></a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5 services">
            <h4 className="main-title">Quick Links</h4>
            <div className="pages">
              <a className="item" href="#"><FaAngleRight className='icon' />Home</a>
              <a className="item" href="/about"><FaAngleRight className='icon' />About Us</a>
              <a className="item" href="/services"><FaAngleRight className='icon' />Our Services</a>
              <a className="item" href="/allprojects"><FaAngleRight className='icon' />Our Projects</a>
              <a className="item" href="/allblogs"><FaAngleRight className='icon' />Our Blogs</a>
              <a className="item" href="/contact"><FaAngleRight className='icon' />Contact Us</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5 services">
            <h4 className="main-title">Newsletter</h4>
            <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum.</p>
            <div className="input-group">
              <input type="text" className="form-control border-0" placeholder="Your Email" />
              <button className="btn-style">Sign Up</button>
            </div>
          </div>

        </div>


        <div className="row copyright">
          <div className="col-lg-6 text-center">
            <p>&copy; <a href="#">Your Site Name</a>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a></p>
          </div>
          <div className="col-lg-6 ">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Privacy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Terms</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">FAQs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer