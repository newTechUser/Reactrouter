import React from 'react'
import './Team.css'

function Team() {
  return (
    <div className="team">
        <p className="teamtitle">
            Our team
        </p>
        <p className="teammaintext">
            Dedicated to quality and your success
        </p>

        <div className="cards">
            <div className="cardscol">
                <div className="cardsimage">
                    <img className='cardsimage' src="https://dummyimage.com/150x150/ced4da/6c757d" alt="" />
                </div>
                <p className="cardsimagetitle">
                    Ibbie Eckart
                </p>
                <p className="cardsendtext">
                    Founder & CEO
                </p>
            </div>
            <div className="cardscol">
                <div className="cardsimage">
                    <img className='cardsimage' src="https://dummyimage.com/150x150/ced4da/6c757d" alt="" />
                </div>
                <p className="cardsimagetitle">
                    Ibbie Eckart
                </p>
                <p className="cardsendtext">
                    Founder & CEO
                </p>
            </div>
            <div className="cardscol">
                <div className="cardsimage">
                    <img className='cardsimage'  src="https://dummyimage.com/150x150/ced4da/6c757d" alt="" />
                </div>
                <p className="cardsimagetitle">
                    Ibbie Eckart
                </p>
                <p className="cardsendtext">
                    Founder & CEO
                </p>
            </div>
            <div className="cardscol">
                <div className="cardsimage">
                    <img className='cardsimage' src="https://dummyimage.com/150x150/ced4da/6c757d" alt="" />
                </div>
                <p className="cardsimagetitle">
                    Ibbie Eckart
                </p>
                <p className="cardsendtext">
                    Founder & CEO
                </p>
            </div>
        </div>
    </div>
  )
}

export default Team