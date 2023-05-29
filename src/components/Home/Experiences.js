import React from 'react';

import Experience from '../UI/Experience';
import './Experiences.scss';

const Experiences = () => {
  const experiences = [
    {
      company: 'Milano Software',
      website: 'https://milanosoftware.com/',
      position: 'Software Developer',
      startDate: 'Mar 2022',
      endDate: 'Nov 2022',
      location: 'Richmond Hill, ON',
      skills: [
        'React',
        'Redux',
        'JavaScript',
        'MySQL',
        'MongoDB',
        '.NET',
        'C#',
        'Tailwind CSS',
        'Material UI',
      ],
    },
    {
      company: 'SenseTech Solutions',
      website: 'https://sensetech.ca/',
      position: 'Volunteer Unity Developer',
      startDate: 'Jul 2020',
      endDate: 'Aug 2020',
      location: 'Toronto, ON (Remote)',
      skills: ['C#', 'Unity'],
    },
  ];

  return (
    <div id='experiences'>
      <h2>Where I've worked...</h2>
      <div>
        {experiences.map((experience, index) => {
          return (
            <Experience
              key={index}
              company={experience.company}
              website={experience.website}
              position={experience.position}
              startDate={experience.startDate}
              endDate={experience.endDate}
              location={experience.location}
              skills={experience.skills}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
