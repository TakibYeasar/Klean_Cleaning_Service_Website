
import React, { useState } from 'react';
import "./Header.scss";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import Modal from '../../components/Modal/Modal';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalFormType, setModalFormType] = useState('Authenticate');

  const openModal = (formType) => {
    setModalFormType(formType);
    setModalOpen(true);
  };

  return (
    <div className={`header_sec d-flex ${isModalOpen ? 'header-hidden' : ''}`}>
      <a href="" className="header-logo">
        <h1 className="title">Klean</h1>
      </a>

      <div className="header_top">
        <div className="header_info d-flex align-items-center">
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

        <div className="header_nav">
          <ul className="navbar-nav">
            <li><a href="/" className="nav-itemactive">Home</a></li>
            <li><a href="/about" className="nav-item">About</a></li>
            <li><a href="/services" className="nav-item">Service</a></li>
            <li><a href="/allprojects" className="nav-item">Project</a></li>
            <li><a href="/allblogs" className="nav-item">Blog</a></li>
            <li><a href="/contact" className="nav-item">Contact</a></li>
          </ul>

          <ul className="navbar-nav">
            <li><a onClick={() => openModal('Authenticate')} className="nav-item ">Sign In</a></li>
            <li><a onClick={() => openModal('Registrations')} className="nav-item ">Sign Up</a></li>
          </ul>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} formType={modalFormType} />
    </div>
  );
}

export default Header;
