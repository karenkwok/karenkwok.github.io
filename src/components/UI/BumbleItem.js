import React from 'react';

import './BumbleItem.scss';

const BumbleItem = (props) => {
  return <div className='item'>{props.children}</div>;
};

export default BumbleItem;
