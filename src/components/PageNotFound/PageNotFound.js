import React from 'react';

import mochacatImg from '../../assets/mochacat-pooped.png';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <div id='page-not-found'>
      <div>
        <h1>404</h1>
        <h2>That page doesn't exist.</h2>
      </div>
      <img src={mochacatImg} alt='Pooped cat' />
    </div>
  );
};

export default PageNotFound;
