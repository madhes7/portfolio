import React from 'react'
import {Element} from 'react-scroll';
import './about.css';

const about = () => {
  return (
    <div>
     <Element name='about' className='about-container'> 
     <div className='about-content'>
            <div className='max-width-container'>
                <div className='text-right-info'>
                    <p className='title'>About</p>
                </div>
                
            </div>
            <div className='max-width-container'>
                <div className='text-right-info'>
                    <p className='intro'> 
                    
                      <p>I'm thrilled to have you here on my portfolio</p>
                      <h2>I'm  M.Madheswaran</h2>
                    </p>
                </div>
                <div>
                    <p className='description'>
                    I'm a Pre-final year CSE student . 
          Aspiring to leverage my leadership abilities, problem-solving skills, 
          and proficiency in front-end development to drive innovation and
           create impactful digital solutions. Dedicated to leading teams towards excellence, 
           solving complex challenges with creativity and efficiency, and crafting user-centric 
           interfaces that enhance the digital experience.
                    </p>
                </div>
            </div>
        </div>
      </Element>
    </div>
  )
}

export default about
