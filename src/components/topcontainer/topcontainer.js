import React from 'react'
import { Element } from 'react-scroll';

import Topcontent from './topcontent';
import './topcontainer.css';
const topcontainer = () => {
  return (
    <div>
      <Element name='home' className='topContainer'>
        < Topcontent />
        
      </Element>
    </div>
  )
}

export default topcontainer
