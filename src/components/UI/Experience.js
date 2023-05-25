import React from 'react';

import Card from './Card';
import SkillContainer from './SkillContainer';
import Skill from './Skill';
import './Experience.scss';

const Experience = (props) => {
  return (
    <Card>
      <div className='experience-card'>
        <div className='experience-company'>
          <a href={props.website} target='_blank' rel='noopener noreferrer'>
            {props.company}
          </a>
        </div>
        <div>{props.position}</div>
        <div className='experience-date-location'>
          <div className='experience--date-location'>
            <div className='experience-emoji'>🗓️</div>
            <div>
              {props.startDate} – {props.endDate}
            </div>
          </div>
          <div className='experience--date-location'>
            <div className='experience-emoji'>📍</div>
            <div>{props.location}</div>
          </div>
        </div>
        <SkillContainer>
          {props.skills.map((skill, index) => {
            return <Skill key={index}>{skill}</Skill>;
          })}
        </SkillContainer>
      </div>
    </Card>
  );
};

export default Experience;
