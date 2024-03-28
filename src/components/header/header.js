import React from 'react'
import {Link} from 'react-scroll';
import './header.css';
import Logo from '../../assets/logo.png'


const header = () => {
  return (
    <div className='header'>
        <img src={Logo}></img>
        <div className='header_left'>
            <h1>Develop<span>er</span></h1>
        </div>
        <div className='header_right'>
           <Link to='home' smooth={true} duration={500}>
            <h4>
                Home
            </h4>
           </Link>
           <Link to='about' smooth={true} duration={500}>
            <h4>
                About Me
            </h4>
           </Link>
           <Link to='skill' smooth={true} duration={500}>
            <h4>
                SkillS
            </h4>
            
           </Link>
           <Link to='pro' smooth={true} duration={500}>
            <h4>
               Project
            </h4>
           </Link>
           <Link to='con' smooth={true} duration={500}>
            <h4>
                Contact
            </h4>
           </Link>
           
        </div>
      
    </div>
  )
}

export default header
