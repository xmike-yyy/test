import "./BioStyle.css"
import React from 'react'
import bioImg from "../assets/copy.JPG"

const Bio = () => {
  return (
    <div class="row">
    <div class="column">
        <img class = "bio-img" src={bioImg}/>
    </div>
    <div class="column">
        <h2> I'm Michael, a Computer Science and Mathematics double major student at MIT. My passions lie at the intersection between computer science and mathematics, which I hope to empower others to achieve their goals through my work and experiences and improve communities in this world. I have relevant experience with Python, HTML/CSS, JavaScript, and React.js.</h2>
        <a class="btn1" href="https://github.com/xmike-yyy/resum-/blob/main/M_SUN.pdf" target="_blank" role="button">Resumé</a>
    </div>

    </div>
  )
}

export default Bio