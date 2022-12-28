import React from 'react'
import './Navbar.css'
import { FaCaretDown } from 'react-icons/fa';
import { Link } from '@mui/material';


function Navbar() {
    let dropcase = "false"
    let dropcase1 = "false"

    function HandleDrop(e){
        e.preventDefault() 
        if(dropcase === "false"){
            e.target.nextElementSibling.style.display="block"
            dropcase = "true";
        }
        else{
            e.target.nextElementSibling.style.display="none"
            dropcase = "false";
        }
    }
    function HandleDrop1(e){
        e.preventDefault()
        if(dropcase1 === "false"){
            e.target.nextElementSibling.style.display="block"
            dropcase1 = "true";
        }
        else{
            e.target.nextElementSibling.style.display="none"
            dropcase1 = "false";
        }
    }
  return (
    <div  className="nav">
        <div className="start">
            <p style={{fontSize:"20px",fontWeight:"bold",cursor:'pointer'}}>Start Bootstrap</p>
        </div>
        <div className="end">
            <p style={{fontSize:"15px",fontWeight:"bold",paddingLeft:"40px",cursor:'pointer'}}>
                <Link style={{color:'white',textDecoration:'none'}} to='/'>Home</Link>
            </p>
            <p style={{fontSize:"15px",fontWeight:"bold",paddingLeft:"40px",cursor:'pointer'}}>
                <Link style={{color:'white',textDecoration:'none'}} to='About'>About</Link>
            </p>
            <p style={{fontSize:"15px",fontWeight:"bold",paddingLeft:"40px",cursor:'pointer'}}>Contact</p>
            <p style={{fontSize:"15px",fontWeight:"bold",paddingLeft:"40px",cursor:'pointer'}}>Pricing</p>
            <p style={{fontSize:"15px",fontWeight:"bold",paddingLeft:"40px",cursor:'pointer'}}>FAQ</p>
            <div className="dropdown" onClick={HandleDrop}>
                <p style={{fontSize:"15px",fontWeight:"bold",paddingLeft:"40px",cursor:'pointer'}}>
                    Blog
                    <FaCaretDown/> 
                </p>
                <div className="dropdownitems">
                    <p style={{fontSize:"15px",fontWeight:"bold",paddingLeft:"40px",cursor:'pointer'}}>Blog Home</p>
                    <p style={{fontSize:"15px",fontWeight:"bold",paddingLeft:"40px",cursor:'pointer'}}>Blog Post</p>
                </div>
            </div>
            <div className="dropdown1" onClick={HandleDrop1}>
                <p style={{fontSize:"15px",fontWeight:"bold",paddingLeft:"40px",cursor:'pointer'}}>
                    Portfolio
                    <FaCaretDown/>
                </p>
                <div className="dropdownitems1">
                    <p style={{fontSize:"15px",fontWeight:"bold",paddingLeft:"40px",cursor:'pointer'}}>Portfoio Overview</p>
                    <p style={{fontSize:"15px",fontWeight:"bold",paddingLeft:"40px",cursor:'pointer'}}>Portfoio Item</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar