import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Sectionone from '../components/Sectionone'
import Sectiontwo from '../components/Sectiontwo'
import Sectionthree from '../components/Sectionthree'
import ButtonBox from '../components/ButtonBox'
import Footer from '../components/Footer'


function Home() {
  return (
<div>
        <Navbar/>
        <Header/>
        <Sectionone/> 
        <Sectiontwo/>
        <Sectionthree/>
        <ButtonBox/>
        <Footer/>
    </div>
  )
}

export default Home 