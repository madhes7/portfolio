import React from 'react'
import './project.css';
import {Element} from 'react-scroll';
import Voting from '../../assets/voting.png';
const project = () => {
  return (
    <div>
      <Element name='pro' className='project-container'>
      <div className='project-content'>
        <div>
          <p className='title'>Project</p>
          <p className='subtitle'>These are the Project I've worked with</p>
        </div>
        <div className='img3'>
         <img src={Voting}/>
         </div>
         <div className='descrip'>
            
                <h1>Title : Voting System</h1>
                <h4> Language : PHP , Css ,MYSQL ,HTML </h4>
                <p className='des'>Our project manages web based casting a ballot framework that works with user (voter), competitor and overseer (who will be in control and will check all the client and data) to take part in web based casting a ballot. Our on the web casting a ballot framework is exceptionally gotten, and it has a basic and intelligent UI (User Interface). 
</p>
            
         </div>
        </div>
      </Element>
    </div>
  )
}

export default project
