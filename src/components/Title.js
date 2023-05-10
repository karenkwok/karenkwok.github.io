import React from 'react';

import './Title.scss';

const Title = () => {
  return (
    <div id='title'>
      <h1>Karen Kwok</h1>
      <div id='title-subtext'>
        <div className='title-subtext-line'>
          <div className='title-subtext-emoji'>💻</div>
          <div>Software Developer</div>
        </div>
        <div className='title-subtext-line'>
          <div className='title-subtext-emoji'>🎓</div>
          <div>University of Toronto '21</div>
        </div>
        <div className='title-subtext-line'>
          <div className='title-subtext-emoji'>📍</div>
          <div>Toronto, ON</div>
        </div>
      </div>
    </div>
  );
};

export default Title;
