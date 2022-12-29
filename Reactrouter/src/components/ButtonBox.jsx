import React from 'react'
import './ButtonBox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ButtonBox() {
  return (
    <div className="boxbutton">
        <div className="boxcontaienr">
            <div className="boxtext">
                <p style={{fontSize:'35px',fontWeight:'bold',margin:'0'}}>New products, delivered to you.</p>
                <p style={{fontSize:'20px',margin:'0'}}>Sign up for our newsletter for the latest updates.</p>
            </div>
           <div className="boxright">
                <div className="inputside">
                    <TextField style={{backgroundColor:'white',padding:'0',margin:'0'}} id="outlined-basic" label="Email Address: " variant="outlined" />   
                    <Button style={{height:'55px',margin:'0'}} variant="contained">Sign up</Button>
                </div>
                <p style={{fontSize:'13px'}}>We care about privacy, and will never share your data.</p>
           </div>
            
        </div>
    </div>
  )
}

export default ButtonBox