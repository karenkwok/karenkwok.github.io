import React from 'react';

import Card from '../UI/Card';
import SkillContainer from '../UI/SkillContainer';
import Skill from '../UI/Skill';
import './Skills.scss';

const Skills = () => {
  // const frontend = [
  //   'React',
  //   'JavaScript',
  //   'Node.js',
  //   'Express.js',
  //   'Angular',
  //   'TypeScript',
  //   'Redux',
  //   'Next.js',
  //   'GraphQL',
  //   'Sass',
  //   'styled-components',
  //   'HTML',
  //   'CSS',
  // ];
  const frontend = [
    'React',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'Redux',
    'GraphQL',
    'Tailwind CSS',
    'styled-components',
    'Sass',
    'HTML',
    'CSS',
  ];

  // const backend = [
  //   'Python',
  //   'Django',
  //   'C#',
  //   '.NET',
  //   'Java',
  //   'MySQL',
  //   'PostgreSQL',
  //   'MongoDB',
  // ];
  const backend = [
    'Python',
    'Node.js',
    'Express.js',
    'C#',
    'Java',
    'PHP',
    'MongoDB',
    'MySQL',
  ];

  // const other = ['AWS', 'Unity', 'Canva'];
  const other = ['Git', 'Vercel', 'Firebase', 'WordPress', 'Unity'];

  return (
    <div id='skills'>
      <h2>What I can do...</h2>
      <div id='skills-wrapper'>
        <Card>
          <SkillContainer>
            {frontend.map((skill, index) => {
              return <Skill key={index}>{skill}</Skill>;
            })}
          </SkillContainer>
        </Card>
        <div id='skills-backend-other'>
          <div id='skills-backend'>
            <Card>
              <SkillContainer>
                {backend.map((skill, index) => {
                  return <Skill key={index}>{skill}</Skill>;
                })}
              </SkillContainer>
            </Card>
          </div>
          <div id='skills-other'>
            <Card>
              <SkillContainer>
                {other.map((skill, index) => {
                  return <Skill key={index}>{skill}</Skill>;
                })}
              </SkillContainer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
