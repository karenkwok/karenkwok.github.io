import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import './Footer.scss';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#ffffff1f',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff1f',
    color: '#fcf5e7',
    padding: theme.spacing(2),
    borderRadius: '10px',
    fontSize: 20,
    fontWeight: 'lighter',
  },
}));

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
      <CustomTooltip
        title={tooltipText}
        placement='top'
        TransitionComponent={Zoom}
        arrow
      >
        <div
          id='footer-email'
          onClick={updateTooltipText}
          onMouseOut={resetTooltipText}
        >
          karenkwok013@gmail.com
        </div>
      </CustomTooltip>
    </footer>
  );
};

export default Footer;
