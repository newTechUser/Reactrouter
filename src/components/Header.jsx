import React from 'react'
import './Header.css'
import Button from '@mui/material/Button';

function Header() {
  return (
    <div className="header">
        <div className="text">
            <p className="titletext">
                A Bootstrap 5 template<br/> for modern businesses
            </p>
            <p className="maintext">
                Quickly design and customize responsive mobile-first sites with
                <br/> Bootstrap, the world’s most popular front-end open source<br/> toolkit!
            </p>
            <div className="btn"> 
                <div>
                    <Button variant="contained" size="large">
                        Get Started
                    </Button>
                </div>
                <div style={{paddingLeft:"50px"}}>
                    <Button style={{color:"white"}} variant="outlined" size="large">
                        Learn more
                    </Button>
                </div>
            </div>
        </div>
        <div className="img">
            <img className='image' src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
        </div>
    </div>
  )
}

export default Header