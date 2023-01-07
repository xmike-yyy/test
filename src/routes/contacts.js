import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'


const Contacts = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading = "Contacts" text = "Get In Touch With Me!"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contacts