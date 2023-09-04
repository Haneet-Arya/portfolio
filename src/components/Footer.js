import "./FooterStyles.css"
import React from 'react'
import { FaGithub, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Purani Bazar</p>
                            <p>Nawada, Bihar-805110</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +91 9771 350 039</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            haneetdevelopes@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>Hello there! I'm Haneet Arya, a passionate and dedicated Software Developer. With a strong penchant for turning innovative ideas into functional and user-friendly applications, I thrive in the world where creativity meets technology.</p>
                    <div className="social">
                        <NavLink to="https://www.linkedin.com/in/haneet-arya/">
                            <FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to="https://github.com/Haneet-Arya">
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                        <NavLink to="https://twitter.com/HaneetArya">
                            <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer