import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Title.scss';

const Title = () => {
  const location = useLocation();
  const destination = location.pathname === '/' ? '/meow' : '/';

  return (
    <div id='title'>
      <h1>
        Karen Kwo<Link to={destination}>k</Link>
      </h1>
      <div id='title-subtext'>
        <div id='emoji-1'>💻</div>
        <div id='emoji-2'>🎓</div>
        <div id='emoji-3'>📍</div>
        <div id='text-1'>Software Developer</div>
        <div id='text-2'>University of Toronto '21</div>
        <div id='text-3'>Toronto, ON</div>
      </div>
    </div>
  );
};

export default Title;
