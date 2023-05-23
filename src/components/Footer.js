import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

const Footer = () => {
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
      >
        karenkwok013@gmail.com
      </div>
    </footer>
  );
};

export default Footer;
