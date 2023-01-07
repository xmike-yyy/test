import React from 'react'
import "./HeroImgStyle.css"
import firstImg from "../assets/photo.jpg"
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img class = "first-img" src={firstImg}/>
        </div>
        <div className='content'>
            <p>Hi, I'm Michael Sun.</p>
            <h1> Current MIT Student</h1>
            <div>
                <Link to={"/projects"}  className = "btn">Projects</Link>
                <Link to={"/contacts"}  className = "btn light">Contacts</Link>

            </div>
        </div>
    </div>
  )
}

export default HeroImg