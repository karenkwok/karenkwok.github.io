import React from 'react';

import './SkillContainer.scss';

const SkillContainer = (props) => {
  return <div className='skill-container'>{props.children}</div>;
};

export default SkillContainer;
