import React from 'react';

import BumbleSection from '../UI/BumbleSection';
import './Bumble.scss';

const Bumble = () => {
  return (
    <div id='bumble'>
      <BumbleSection>
        <h3>About me</h3>
        <p>
          Hey!&nbsp;&nbsp;<span className='wave'>👋</span>
        </p>
        <p>I'm a software developer based in Toronto.</p>
        <p>
          Huuuge Pokémon nerd. I obsessively collect Pokémon cards. Sometimes I
          play Pokémon GO.
        </p>
        <p>I also like ice cream, anime, and playing the piano.</p>
        <p>
          I deleted my Bumble account so I thought it'd be fun to make this. 🤪
        </p>
        <p>⚡️ 💫 ✨</p>
      </BumbleSection>
    </div>
  );
};

export default Bumble;
