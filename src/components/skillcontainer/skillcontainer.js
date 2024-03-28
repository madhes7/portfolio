import React from 'react';
import HTMLImg from '../../assets/html.png';
import CSSImg from '../../assets/css.png';
import ReactImg from '../../assets/react.png';
import JavaImg from '../../assets/java.png';
import { Element } from 'react-scroll';
import MongoImg from '../../assets/mongo.png';
import C from '../../assets/C .png';
import PythonImg from '../../assets/python.png';
import SqlImg from '../../assets/mysql.png';
import './skillcontainer.css'; // Importing the CSS file

const Skills = () => {
  return (
    <div >
      <Element name='skill' className='skills-container'>
      <div className='skills-content'>
        <div>
          <p className='title'>Skills</p>
          <p className='subtitle'>These are the technologies I've worked with</p>
        </div>
        <div className='skills-grid'>
          <SkillCard image={HTMLImg} title='HTML' />
          <SkillCard image={CSSImg} title='CSS' />
          <SkillCard image={C} title='C' />
          <SkillCard image={ReactImg} title='React' />
          <SkillCard image={PythonImg} title='Python' />
          <SkillCard image={JavaImg} title='Java' />
          <SkillCard image={MongoImg} title='MongoDB' />
          <SkillCard image={SqlImg} title='MYSQL' />
        </div>
      </div>
      </Element>
    </div>
  );
};

const SkillCard = ({ image, title }) => {
  return (
    <div className='skill-card'>
      <img className="image" src={image} alt={title} />
      <p className='skill-title'>{title}</p>
    </div>
  );
};

export default Skills;
