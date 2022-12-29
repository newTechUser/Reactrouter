import React from 'react'
import './Sectiontwo.css'

function Sectiontwo() {
  return (
    <div className="Sectiontwomain">
        <p className="mainText">
            "Working with Start Bootstrap templates has saved me tons of <br/>
            development time when building new projects! Starting with a <br/>
            Bootstrap template just makes things easier!"
        </p>
        <div style={{textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className="circle">
                <img className='circle' src="https://dummyimage.com/40x40/ced4da/6c757d" alt="" />
            </div>
            <p style={{fontSize:'20px',fontWeight:'bold'}}>Tom Ato / CEO, Pomodoro</p>
        </div>
    </div>
  )
}

export default Sectiontwo