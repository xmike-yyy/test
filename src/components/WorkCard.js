import "./WorkCardStyles.css"
import React from 'react'
import pro1 from "../assets/test.gif"
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (            
    <div className="project-card">
    <img src={props.imgsrc} alt = ""/>
    <h2 className="project-title">{props.title}</h2>
        <div className="pro-skills">
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink to={props.view} className="btn">Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCard