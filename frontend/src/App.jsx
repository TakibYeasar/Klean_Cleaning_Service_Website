import React from 'react';
import './styles/sass/_base.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header } from './components';
import { Aboutus, Allblogs, Allprojects, Authenticate, Blogdetails, Contact, Homepage, Registrations, Services } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/allblogs" element={<Allblogs />} />
        <Route path="/allprojects" element={<Allprojects />} />
        <Route path="/blogdetails" element={<Blogdetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
