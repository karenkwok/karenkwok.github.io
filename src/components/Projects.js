import React from 'react';

import Project from './UI/Project';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      image: '',
      title: 'UTSearCh',
      startDate: 'Feb 2021',
      endDate: 'Apr 2021',
      links: [
        {
          youtube: 'https://www.youtube.com/watch?v=HAx83RlzHaU',
        },
        {
          github: 'https://github.com/karenkwok/utsearch',
        },
      ],
      team: [{ name: 'Jordan Feng', website: 'https://jordanfeng.me/' }],
      description:
        'An online networking platform with videochat and location sharing functionalities for students to meet and connect.',
      skills: [
        'React',
        'JavaScript',
        'Node.js',
        'Express.js',
        'GraphQL',
        'MongoDB',
        'PeerJS',
        'Socket.IO',
        'Google Maps API',
        'Heroku',
        'HTML',
        'CSS',
      ],
    },
  ];

  return (
    <div id='projects'>
      <h2>What I've been working on...</h2>
      <div>
        {projects.map((project) => {
          return (
            <Project
              image={project.image}
              title={project.title}
              startDate={project.startDate}
              endDate={project.endDate}
              links={project.links}
              team={project.team}
              description={project.description}
              skills={project.skills}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
