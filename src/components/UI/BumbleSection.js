import React from 'react';

import './BumbleSection.scss';

const BumbleSection = (props) => {
  return <div className='bumble-section'>{props.children}</div>;
};

export default BumbleSection;
