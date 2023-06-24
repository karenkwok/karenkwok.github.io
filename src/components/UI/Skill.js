import React, { useState } from 'react';

import './Skill.scss';

const Skill = (props) => {
  const [clicked, setClicked] = useState(false);

  const updateSkillStyles = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={`skill ${clicked ? 'skill-clicked' : ''}`}
      onClick={updateSkillStyles}
    >
      {props.children}
    </div>
  );
};

export default Skill;
