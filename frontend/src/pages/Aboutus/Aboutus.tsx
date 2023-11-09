import React from 'react';
import "./Aboutus.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { About, Team, Whychoose } from '../../containers';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Aboutus = () => {
    return (
        <div className="aboutus_sec">

            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center">
                            <h1 className="main-title">About</h1>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="align-items-center">
                                <a className="btn-outline-border" href="">Home</a>
                                <FaAngleDoubleRight className="icon"/>
                                <a className="btn-outline-border" href="">About</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <About />

            <div className="why_choose">
                <Whychoose />
            </div>

            <Team />

        </div>
    )
}

export default Aboutus