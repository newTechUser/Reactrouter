import React from 'react'
import Navbar from '../components/Navbar'
import Aheader from '../components/Aheader'
import Abox from '../components/Abox'
import Team from '../components/Team'
import Footer from '../components/Footer'



function About() {
 
  return (
    <div className="AboutContainer">
      <Navbar/>
      <Aheader/>
      <Abox/> 
      <Team/>
      <Footer/>
    </div>
  ) 
} 

export default About