import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.jpg"

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am I?</h1>
                <p>Hello there! I'm Haneet Arya, a passionate and dedicated Software Developer. With a strong penchant for turning innovative ideas into functional and user-friendly applications, I thrive in the world where creativity meets technology.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={react1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={react2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent