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
    'JavaScript',
    'Redux',
    'Next.js',
    'GraphQL',
    'Sass',
    'Tailwind CSS',
    'styled-components',
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
    'C#',
    'Java',
    'Node.js',
    'Express.js',
    'MySQL',
    'MongoDB',
  ];

  // const other = ['AWS', 'Unity', 'Canva'];
  const other = ['Git', 'Firebase', 'Vercel', 'Unity'];

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
