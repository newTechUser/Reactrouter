import React from 'react'
import './Sectionone.css'
import { BsFillCollectionFill , BsBuilding } from 'react-icons/bs';

function Sectionone() {
  return (
    <div className="sectionone">
        <div className="onecol">
            <p style={{fontSize:"30px",fontWeight:"bold"}}>A better way to start<br/> building.</p>
        </div>
        <div className="twocol">
            <div className="cardone">
                <div className="icon">
                    <BsFillCollectionFill style={{color:"white",padding:'15px'}}/>
                </div>
                <p className="cardtitletext">Featured title</p>
                <p className="cardmaintext">
                    Paragraph of text beneath the <br/> heading to explain the heading. Here is just a bit more text.
                </p>
            </div>
            <div className="cardtwo">
                <div className="icon">
                    <BsBuilding style={{color:"white",padding:'15px'}}/>
                </div>
                <p className="cardtitletext">Featured title</p>
                <p className="cardmaintext">
                    Paragraph of text beneath the <br/> heading to explain the heading. Here is just a bit more text.
                </p>
            </div>
        </div>
        <div className="threecol">
            <div className="cardthree">
                <div className="icon">
                    <BsFillCollectionFill style={{color:"white",padding:'15px'}}/>
                </div>
                <p className="cardtitletext">Featured title</p>
                <p className="cardmaintext">
                    Paragraph of text beneath the <br/> heading to explain the heading. Here is just a bit more text.
                </p>
            </div>
            <div className="cardfour">
                <div className="icon">
                    <BsBuilding style={{color:"white",padding:'15px'}}/>
                </div>
                <p className="cardtitletext">Featured title</p>
                <p className="cardmaintext">
                    Paragraph of text beneath the <br/> heading to explain the heading. Here is just a bit more text.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Sectionone