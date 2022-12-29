import React from 'react'
import './Footer.css'
import { Link } from '@mui/material'

function Footer() {
  return (
    <footer className="footer">
        <div className="footstart">
            <p>Copyright © Your Website 2022</p>
        </div>
        <div className="footend">
            <Link style={{color:'white'}}>Privacy</Link> ·  
            <Link style={{color:'white'}}>Terms</Link> · 
            <Link style={{color:'white'}}>Contact</Link>
        </div>
    </footer>
  )
}

export default Footer