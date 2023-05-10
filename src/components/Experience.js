import React from 'react';

import Card from './UI/Card';
import Skill from './UI/Skill';
import './Experience.scss';

const Experience = () => {
  return (
    <div id='experience'>
      <h2>Where I've worked...</h2>
      <Card>
        <div className='experience-card'>
          <div className='experience-company'>Milano Software</div>
          <div>Software Developer</div>
          <div className='experience-date-location'>
            <div className='experience-date'>
              <div className='experience-emoji'>🗓️</div>
              <div>Mar 2022 – Nov 2022</div>
            </div>
            <div className='experience-location'>
              <div className='experience-emoji'>📍</div>
              <div>Richmond Hill, ON</div>
            </div>
          </div>
          <div className='experience-skills'>
            <Skill>React</Skill>
            <Skill>Redux</Skill>
            <Skill>JavaScript</Skill>
            <Skill>MySQL</Skill>
            <Skill>MongoDB</Skill>
            <Skill>.NET</Skill>
            <Skill>C#</Skill>
            <Skill>Tailwind CSS</Skill>
            <Skill>Material UI</Skill>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Experience;
