import React from 'react';

import notFoundImage from '../../assets/quagsire.webp';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <div id='page-not-found'>
      <div>
        <h1>404</h1>
        <h2>That page doesn't exist.</h2>
      </div>
      <img src={notFoundImage} alt='Quagsire' />
    </div>
  );
};

export default PageNotFound;
