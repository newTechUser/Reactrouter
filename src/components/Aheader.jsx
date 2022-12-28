import React from 'react'
import './Aheader.css'
import Button from '@mui/material/Button';

function Aheader() {
  return (
    <div className="head">
        <div>
            <p className="headtittletext">
                Our mission is to make building<br/>
                websites easier for everyone.
            </p>
            <p className="headmaintext">
            Start Bootstrap was built on the idea that quality, functional website<br/>
            templates and themes should be available to everyone. Use our<br/>
            open source, free products, or support us by purchasing one of our <br/>
            premium products or services.
            </p>
            <div className="headbtn">
                <Button variant="contained">Read our story</Button>
            </div>
            </div>
    </div>
  )
}

export default Aheader