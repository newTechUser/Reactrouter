import React from 'react'
import './Sectionthree.css'
import Card from './Card'

function Sectionthree() {
  return (
    <div className="SectionAll">
        <p className="sectiontitle">
            From our blog
        </p>
        <p className="sectionmain">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque <br/>
             fugit ratione dicta mollitia. Officiis ad.
        </p>
        <div className="container">
            <div className="card">
              <Card/>
            </div>
            <div className="card">
              <Card/>
            </div>
            <div className="card">
              <Card/>
            </div>
        </div>
    </div>
  )
}

export default Sectionthree