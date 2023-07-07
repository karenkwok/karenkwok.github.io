import React from 'react';

import './BumbleItem.scss';

const BumbleItem = (props) => {
  return (
    <div className='item'>
      <div className='item-emoji'>{props.emoji}</div>
      <div>{props.text}</div>
    </div>
  );
};

export default BumbleItem;
