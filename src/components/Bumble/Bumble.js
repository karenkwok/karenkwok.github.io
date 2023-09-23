import React from 'react';
import { Link } from 'react-router-dom';

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
        <p>Inspired by Bumble. 🤪</p>
        <p>⚡️ 💫 ✨</p>
      </BumbleSection>
      <BumbleSection>
        <h3>My basics</h3>
        <BumbleItemContainer>
          <BumbleItem emoji={'💻'} text={'Software Developer'} />
          <BumbleItem emoji={'🎓'} text={'University of Toronto'} />
          <BumbleItem emoji={'🎹'} text={'Amateur Pianist'} />
          <BumbleItem emoji={'🐢'} text={'Turtle Mom'} />
        </BumbleItemContainer>
      </BumbleSection>
      <img src={mochacat2Img} alt='Cat licking ice cream' />
      <BumbleSection>
        <h3>Binge-watch recommendations...</h3>
        <BumbleItemContainer>
          <BumbleItem emoji={'🧙'} text={'Harry Potter'} />
          <BumbleItem emoji={'🌱'} text={'Studio Ghibli'} />
          <BumbleItem emoji={'☕️'} text={'Friends'} />
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h3>My Hogwarts House is...</h3>
        <BumbleItemContainer>
          <BumbleItem emoji={'🐍'} text={'Slytherin'} />
        </BumbleItemContainer>
      </BumbleSection>
      <img src={mochacat3Img} alt='Winking cat with rainbow' />
      <BumbleSection>
        <h3>My top 5 fav anime...</h3>
        <BumbleItemContainer>
          <BumbleItem emoji={'🖤'} text={'Bleach'} />
          <BumbleItem emoji={'❤️'} text={'InuYasha'} />
          <BumbleItem emoji={'🧡'} text={'Naruto'} />
          <BumbleItem emoji={'💙'} text={'Samurai Champloo'} />
          <BumbleItem emoji={'💚'} text={'Chainsaw Man'} />
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h3>My Pokémon team...</h3>
        <BumbleItemContainer>
          <BumbleItem emoji={'🔵'} text={'Squirtle'} />
          <BumbleItem emoji={'⚫️'} text={'Houndoom'} />
          <BumbleItem emoji={'🟡'} text={'Flaaffy'} />
          <BumbleItem emoji={'⚪️'} text={'Teddiursa'} />
          <BumbleItem emoji={'🔴'} text={'Arcanine'} />
          <BumbleItem emoji={'🟤'} text={'Flygon'} />
        </BumbleItemContainer>
      </BumbleSection>
      <img src={mochacat4Img} alt='Sleeping cat' />
      <BumbleSection>
        <h3>Food I could eat everyday...</h3>
        <BumbleItemContainer>
          <BumbleItem emoji={'🍣'} text={'Sushi'} />
          <div id='bumble-icecream'>
            <Link to='/icecream'>
              <BumbleItem emoji={'🍨'} text={'Ice Cream'} />
            </Link>
          </div>
          <BumbleItem emoji={'🍳'} text={'Brunch'} />
          <BumbleItem emoji={'🍔'} text={'Shake Shack'} />
          <BumbleItem emoji={'🍟'} text={'Yeet Hay (熱氣) food'} />
          <BumbleItem emoji={'🧀'} text={'anything cheesy'} />
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h3>Best ice cream flavours...</h3>
        <BumbleItemContainer>
          <BumbleItem emoji={'🍪'} text={"Cookies 'n Cream / Oreo"} />
          <BumbleItem emoji={'🍵'} text={'Matcha'} />
          <BumbleItem emoji={'🍫'} text={'White Chocolate'} />
          <BumbleItem emoji={'🫐'} text={'Blueberry'} />
          <BumbleItem emoji={'🥜'} text={'Pistachio'} />
        </BumbleItemContainer>
      </BumbleSection>
      <img src={mochacat5Img} alt='Cat riding unicorn' />
      <BumbleSection>
        <h3>Cool places I've been...</h3>
        <BumbleItemContainer>
          <BumbleItem emoji={'🇨🇦'} text={'Vancouver, BC'} />
          <BumbleItem emoji={'🇺🇸'} text={'Los Angeles, CA'} />
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h3>Weird flex but ok...</h3>
        <BumbleItemContainer>
          <BumbleItem emoji={'😎'} text={'I have a lot of Pokémon cards'} />
          <BumbleItem emoji={'✌️'} text={'Level 43 on Pokémon GO'} />
          <BumbleItem
            emoji={'🏆'}
            text={'Can list the first 51 Pokémon in order'}
          />
        </BumbleItemContainer>
      </BumbleSection>
      <img src={mochacat6Img} alt='Pooped cat' />
    </div>
  );
};

export default Bumble;
