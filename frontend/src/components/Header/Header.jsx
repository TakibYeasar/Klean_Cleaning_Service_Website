import React from 'react';
import "./Header.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header_sec">
      <div className="header-top">
        <div className="container d-flex topbar">
          <div className="d-flex contact_sec">
            <div className="align-items-center contact">
              <FaEnvelope className='icon' />
              <small>info@example.com</small>
            </div>
            <div className="align-items-center contact">
              <FaPhone className='icon' />
              <small>+012 345 6789</small>
            </div>
          </div>
          <div className="social-links">
            <a href="">
              <FaFacebook className='icon' />
            </a>
            <a href="">
              <FaTwitter className='icon' />
            </a>
            <a href="">
              <FaLinkedin className='icon' />
            </a>
            <a href="">
              <FaInstagram className='icon' />
            </a>
            <a href="">
              <FaYoutube className='icon' />
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="navbar">
          <a href="" className="header-logo">
            <h1 className="title">Klean</h1>
          </a>


          <ul className="navbar-nav">
            <li><a href="/" className="nav-itemactive">Home</a></li>
            <li><a href="/about" className="nav-item">About</a></li>
            <li><a href="/service" className="nav-item">Service</a></li>
            <li><a href="/project" className="nav-item">Project</a></li>
            <li><a href="/contact" className="nav-item">Contact</a></li>
          </ul>

          <a href="" className="btn-style">Get A Quote</a>
        </div>
      </div>

    </div>
  )
}

export default Header