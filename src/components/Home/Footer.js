import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

const Footer = () => {
  const email = 'karenkwok013@gmail.com';
  const [tooltipText, setTooltipText] = useState('Click to copy');

  const updateTooltipText = () => {
    navigator.clipboard.writeText(email);
    setTooltipText('Copied!');
  };

  const resetTooltipText = () => {
    setTooltipText('Click to copy');
  };

  return (
    <footer>
      <div id='footer-links'>
        <div id='footer-links-linkedin'>
          <a
            href='https://www.linkedin.com/in/karen-kwok/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div id='footer-links-github'>
          <a
            href='https://github.com/karenkwok'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
        </div>
      </div>
      <div
        id='footer-email'
        onClick={updateTooltipText}
        onMouseOut={resetTooltipText}
        data-tooltip={tooltipText}
      >
        {email}
      </div>
    </footer>
  );
};

export default Footer;
