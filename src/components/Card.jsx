import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className="maincard">
        <div className="cardimg">
            <img style={{width:'400px',height:'250px',borderRadius:'10px'}} src="https://dummyimage.com/600x350/ced4da/6c757d" alt="" />
        </div>
        <div className="cardtext">
            <div className="cardeticet">
                News
            </div>
            <p className="cardtitletext">
                Blog post title
            </p>
            <p className="cardmaintext">
                Some quick example text to build on the card <br/>title and make up the bulk of the card's<br/> content.
            </p>
            <div className="cardendtext">
                <div className="circle">
                    <img className='circle' src="https://dummyimage.com/40x40/ced4da/6c757d" alt="" />
                </div>
                <div className="floatright">
                    <p style={{fontWeight:'bold',display:'inline'}}>Evelyn Martinez</p>
                    <p>April 2, 2022 · 10 min read</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Card