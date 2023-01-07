import "./FooterStyles.css"

import React from 'react'
import {FaPhone, FaMailBulk, FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        <div>
                            <p>857-505-5310</p>
                        </div>                    
                    </h4>
                </div>
                <div className="mail">
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>sun_m132@mit.edu</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>I am a Computer Science and Mathematics Double Major undergraduate student currently attending Massachusetts Institute of Technology</p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaGithub size={30} style={{color:"#fff", marginRight:"2rem"}}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer