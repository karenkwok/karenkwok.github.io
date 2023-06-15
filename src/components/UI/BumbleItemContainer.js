import React from 'react';

import './BumbleItemContainer.scss';

const BumbleItemContainer = (props) => {
  return <div className='item-container'>{props.children}</div>;
};

export default BumbleItemContainer;
