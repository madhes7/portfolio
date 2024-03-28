import React from 'react'
import { Element } from 'react-scroll';
import './contact.css';
import { IoLogoInstagram   } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
const contact = () => {
  return (
    <div>
        <Element name='con' className='contact'>
          <h1>Contact </h1>
          <div className='contact-container'>
             <p>
                < AiOutlineMail size={35} /><span><a href='mailto:92madheswaran2004@gmail.com'> 92madheswaran2004@gmail.com</a></span>
              </p> 
              <p>
              <GiRotaryPhone size={35}/> <span> +91 6383529905</span>
              </p>
              
              <div className='icons'>
              <a href='https://github.com/madhes7'><FaGithub size={50} color='white' /></a>
              <a href='https://www.linkedin.com/in/madheswaran-m-8a2341267/'><FaLinkedin size={50} color='white'/></a>
              <a href='https://www.instagram.com/madhes_14/'><IoLogoInstagram  size={50} color='white'/></a>
              
              
              </div>
              </div>
        </Element>

      
    </div>
  )
}

export default contact
