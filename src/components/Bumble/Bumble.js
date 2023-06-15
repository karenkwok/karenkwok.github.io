import React from 'react';

import BumbleSection from '../UI/BumbleSection';
import BumbleItemContainer from '../UI/BumbleItemContainer';
import BumbleItem from '../UI/BumbleItem';
import mochacat1Img from '../../assets/mochacat-purple.png';
import mochacat2Img from '../../assets/mochacat-icecream.png';
import mochacat3Img from '../../assets/mochacat-rainbow.png';
import mochacat4Img from '../../assets/mochacat-sleep.png';
import mochacat5Img from '../../assets/mochacat-unicorn.png';
import mochacat6Img from '../../assets/mochacat-pooped.png';
import './Bumble.scss';

const Bumble = () => {
  return (
    <div id='bumble'>
      <img src={mochacat1Img} alt='Double peace sign cat' />
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
      <BumbleSection>
        <h3>My basics</h3>
        <BumbleItemContainer>
          <BumbleItem>💻&nbsp;&nbsp;Software Developer</BumbleItem>
          <BumbleItem>🎓&nbsp;&nbsp;University of Toronto</BumbleItem>
          <BumbleItem>🎹&nbsp;&nbsp;Amateur Pianist</BumbleItem>
          <BumbleItem>🐢&nbsp;&nbsp;Turtle Mom</BumbleItem>
        </BumbleItemContainer>
      </BumbleSection>
      <img src={mochacat2Img} alt='Cat licking ice cream' />
      <BumbleSection>
        <h3>Binge-watch recommendations...</h3>
        <BumbleItemContainer>
          <BumbleItem>🪄&nbsp;&nbsp;Harry Potter</BumbleItem>
          <BumbleItem>🌱&nbsp;&nbsp;Studio Ghibli</BumbleItem>
          <BumbleItem>☕️&nbsp;&nbsp;Friends</BumbleItem>
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h3>My Hogwarts House is...</h3>
        <BumbleItemContainer>
          <BumbleItem>🐍&nbsp;&nbsp;Slytherin</BumbleItem>
        </BumbleItemContainer>
      </BumbleSection>
      <img src={mochacat3Img} alt='Winking cat with rainbow' />
      <BumbleSection>
        <h3>My top 5 fav anime...</h3>
        <BumbleItemContainer>
          <BumbleItem>🖤&nbsp;&nbsp;Bleach</BumbleItem>
          <BumbleItem>❤️&nbsp;&nbsp;InuYasha</BumbleItem>
          <BumbleItem>🧡&nbsp;&nbsp;Naruto</BumbleItem>
          <BumbleItem>💙&nbsp;&nbsp;Samurai Champloo</BumbleItem>
          <BumbleItem>💚&nbsp;&nbsp;Chainsaw Man</BumbleItem>
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h3>My Pokémon team...</h3>
        <BumbleItemContainer>
          <BumbleItem>🔵&nbsp;&nbsp;Squirtle</BumbleItem>
          <BumbleItem>⚫️&nbsp;&nbsp;Houndoom</BumbleItem>
          <BumbleItem>🟡&nbsp;&nbsp;Flaaffy</BumbleItem>
          <BumbleItem>⚪️&nbsp;&nbsp;Teddiursa</BumbleItem>
          <BumbleItem>🔴&nbsp;&nbsp;Arcanine</BumbleItem>
          <BumbleItem>🟤&nbsp;&nbsp;Flygon</BumbleItem>
        </BumbleItemContainer>
      </BumbleSection>
      <img src={mochacat4Img} alt='Sleeping cat' />
      <BumbleSection>
        <h3>Food I could eat everyday...</h3>
        <BumbleItemContainer>
          <BumbleItem>🍣&nbsp;&nbsp;Sushi</BumbleItem>
          <BumbleItem>🍨&nbsp;&nbsp;Ice Cream</BumbleItem>
          <BumbleItem>🍳&nbsp;&nbsp;Brunch</BumbleItem>
          <BumbleItem>🍔&nbsp;&nbsp;Shake Shack</BumbleItem>
          <BumbleItem>🍟&nbsp;&nbsp;Yeet Hay (熱氣) food</BumbleItem>
          <BumbleItem>🧀&nbsp;&nbsp;anything cheesy</BumbleItem>
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h3>Best ice cream flavours...</h3>
        <BumbleItemContainer>
          <BumbleItem>🍪&nbsp;&nbsp;Cookies 'n Cream / Oreo</BumbleItem>
          <BumbleItem>🍵&nbsp;&nbsp;Matcha</BumbleItem>
          <BumbleItem>🍫&nbsp;&nbsp;White Chocolate</BumbleItem>
          <BumbleItem>🫐&nbsp;&nbsp;Blueberry</BumbleItem>
          <BumbleItem>🥜&nbsp;&nbsp;Pistachio</BumbleItem>
        </BumbleItemContainer>
      </BumbleSection>
      <img src={mochacat5Img} alt='Cat riding unicorn' />
      <BumbleSection>
        <h3>Cool place I've been...</h3>
        <BumbleItemContainer>
          <BumbleItem>🇺🇸&nbsp;&nbsp;Los Angeles, CA</BumbleItem>
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h3>Weird flex but ok...</h3>
        <BumbleItemContainer>
          <BumbleItem>😎&nbsp;&nbsp;I have a lot of Pokémon cards</BumbleItem>
          <BumbleItem>✌️&nbsp;&nbsp;Level 43 on Pokémon GO</BumbleItem>
          <BumbleItem>
            🏆&nbsp;&nbsp;Can list the first 51 Pokémon in order
          </BumbleItem>
        </BumbleItemContainer>
      </BumbleSection>
      <img src={mochacat6Img} alt='Pooped cat' />
    </div>
  );
};

export default Bumble;
