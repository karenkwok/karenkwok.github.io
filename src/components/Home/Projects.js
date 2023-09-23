import React from 'react';
import { faYoutube, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

import Project from '../UI/Project';
import utsearchImg from '../../assets/utsearch.png';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      // image: utsearchImg,
      // imageAlt: 'UTSearch Image',
      title: 'UTSearCh',
      startDate: 'Feb 2021',
      endDate: 'Apr 2021',
      links: [
        {
          href: 'https://www.youtube.com/watch?v=HAx83RlzHaU',
          icon: faYoutube,
        },
        { href: 'https://github.com/karenkwok/utsearch', icon: faGithubAlt },
      ],
      skills: [
        'React',
        'JavaScript',
        'Node.js',
        'Express.js',
        'GraphQL',
        'MongoDB',
        // 'PeerJS',
        // 'Socket.IO',
        'Google Maps API',
        'Heroku',
        'HTML',
        'CSS',
      ],
      description:
        'An online networking platform with videochat and location sharing functionalities for students to meet and connect.',
    },
  ];

  return (
    <div id='projects'>
      <h2>What I've been working on...</h2>
      <div>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              // image={project.image}
              // imageAlt={project.imageAlt}
              title={project.title}
              startDate={project.startDate}
              endDate={project.endDate}
              links={project.links}
              skills={project.skills}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
