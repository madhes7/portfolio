import React from 'react'
import {Link} from 'react-scroll';
import './topcontent.css';
import Mady from '../../assets/madhes.jpg'
import Port from '../../assets/Madheswaran_M.pdf';
const topcontent = () => {
  return (
    <div className='topcontent'>
      <div className='img1'>
         <img src={Mady}/>
         </div>
        <div className='topcontent_container'> 
        
         
          <p>Hi, I am </p>
            <h1>Madheswaran M</h1>
            <p>A professional Web developer</p>
            <a href={Port} download='Madheswaran_M.pdf'>
                <button className='download'> Download CV</button>
            </a>
            <Link to='pro' smooth='true' duration={500}>
                <button className='work'> MY Work</button>
            </Link>
        </div>
      </div>
   
  )
}

export default topcontent
