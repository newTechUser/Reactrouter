import React from 'react'
import './Abox.css'

function Abox() {
  return (
    <div className="Abox">
        <div className="boxcontainer">
            <div className="boximage">
                <img width={{width:'300px',height:'200px'}} src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
            </div>
            <div className="boxText">
                <p className="headertext">
                    Our founding
                </p>
                <p className="boxmaintext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, <br/>
                    ut esse a labore aliquam beatae expedita. Blanditiis impedit<br/>
                    numquam libero molestiae et fugit cupiditate, quibusdam<br/>
                    expedita, maiores eaque quisquam.
                </p>
            </div>
        </div>
        <div className="boxcontainer1">
            <div className="boxText">
                <p className="headertext">
                    Our founding
                </p>
                <p className="boxmaintext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, <br/>
                    ut esse a labore aliquam beatae expedita. Blanditiis impedit<br/>
                    numquam libero molestiae et fugit cupiditate, quibusdam<br/>
                    expedita, maiores eaque quisquam.
                </p>
            </div>
            <div className="boximage">
                <img width={{width:'300px',height:'200px'}} src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
            </div>
        </div>
    </div>

  )
}

export default Abox