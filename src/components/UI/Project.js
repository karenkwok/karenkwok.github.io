import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from './Card';
import SkillContainer from './SkillContainer';
import Skill from './Skill';
import './Project.scss';

const Project = (props) => {
  return (
    <Card>
      <div className='project-card'>
        <div className='project-top'>
          <img src={props.image} alt={props.imageAlt} />
          <div className='project-top-text'>
            <div className='project-title'>{props.title}</div>
            <div className='project-emoji-date'>
              <div className='project-emoji'>🗓️</div>
              <div>
                {props.startDate} – {props.endDate}
              </div>
            </div>
            <div className='project-links'>
              {props.links.map((link, index) => {
                return (
                  <div key={index}>
                    <a
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={link.icon} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <SkillContainer>
          {props.skills.map((skill, index) => {
            return <Skill key={index}>{skill}</Skill>;
          })}
        </SkillContainer>
        <div className='project-description'>{props.description}</div>
      </div>
    </Card>
  );
};

export default Project;
