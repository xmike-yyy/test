import "./NavbarStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"

import { useState } from "react"
 
 const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor);
   return (
     <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
            <Link to="/"><h1>Home</h1></Link>
            </li>
            <li>
            <Link to="/projects"><h1>Projects</h1></Link>
            </li>

            <li>
            <Link to="/contacts"><h1>Contacts</h1></Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}}/>):
            (<FaBars size={20} style={{color: "#fff"}}/>)}

        </div>
     </div>
   )
 }
 
 export default Navbar
