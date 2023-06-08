import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const location = useLocation();
  const destination = location.pathname === '/' ? '/icecream' : '/';

  return (
    <header>
      <div id='logo'>
        <Link to={destination}>Kk</Link>
      </div>
    </header>
  );
};

export default Header;
