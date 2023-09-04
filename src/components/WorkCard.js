import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
    let btnName = "Source";
    if(props.title=="VIT Nav"){
        btnName = "Play Store"
    }
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="project1" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btn">
                    <NavLink to={props.source} className="btn">{btnName}</NavLink>
                    {/* <NavLink to={props.source} className="btn">Source</NavLink> */}
                </div>
            </div>
        </div>
    )
}

export default WorkCard