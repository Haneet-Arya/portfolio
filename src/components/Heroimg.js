import "./HeroimgStyles.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link, NavLink } from "react-router-dom"

const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>Hi, I'm Haneet Arya</p>
                <h1>Software Developer</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    {/* <Link to="/contact" className="btn btn-light">Contact</Link> */}
                    <NavLink to="https://drive.google.com/uc?export=download&id=1WIU06vVfe9YBAM4-BEALAt4lJZCeU03b" className="btn btn-light">Resume</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Heroimg