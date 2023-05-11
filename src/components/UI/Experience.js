import React from 'react';

import Card from './Card';
import SkillContainer from './SkillContainer';
import Skill from './Skill';
import './Experience.scss';

const Experience = (props) => {
  return (
    <div className='experience'>
      <Card>
        <div className='experience-card'>
          <div className='experience-company'>{props.company}</div>
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
            {props.skills.map((skill) => {
              return <Skill>{skill}</Skill>;
            })}
          </SkillContainer>
        </div>
      </Card>
    </div>
  );
};

export default Experience;
