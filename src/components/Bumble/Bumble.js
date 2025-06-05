import React from 'react';
import { Link } from 'react-router-dom';

import BumbleSection from '../UI/BumbleSection';
import BumbleItemContainer from '../UI/BumbleItemContainer';
import BumbleItem from '../UI/BumbleItem';
import image1 from '../../assets/jiji.jpg';
import image2 from '../../assets/mochacat-unicorn.png';
import image3 from '../../assets/hapidanbui.jpeg';
import './Bumble.scss';

const Bumble = () => {
  return (
    <div id='bumble'>
      <img src={image1} alt='Jiji' />
      <BumbleSection>
        <p id='large-text'>
          oh hii~&nbsp;&nbsp;<span className='wave'>👋</span>
        </p>
        <p>i'm a software developer based in toronto.</p>
        <p>
          i like pokémon. a lot. pls ask me about it. <br />
          currently hunting for hundos on pogo and grinding ranked on pocket.
        </p>
        <p>
          i also like collecting cute stickers+charms, tcg, and figurines i have
          no space for.
        </p>
        <p className='section-bottom'>-karen:) ♡</p>
      </BumbleSection>
      <img src={image2} alt='Peach' />
      <BumbleSection>
        <h2 className='title-text'>about me</h2>
        <BumbleItemContainer>
          <BumbleItem emoji={'💻'} text={'Software Developer'} />
          <BumbleItem emoji={'🎓'} text={'University of Toronto'} />
          <BumbleItem emoji={'📍'} text={'Toronto'} />
          <div className='bumble-clickable'>
            <Link
              to='https://www.youtube.com/watch?v=jMq42GoCKVo'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BumbleItem emoji={'🩵'} text={'Pokémon Addict'} />
            </Link>
          </div>
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h2 className='title-text'>my binge-watch reccs...</h2>
        <BumbleItemContainer>
          <BumbleItem emoji={'🪄'} text={'Harry Potter'} />
          <BumbleItem emoji={'🌱'} text={'Studio Ghibli'} />
          <div className='bumble-clickable'>
            <Link
              to='https://www.youtube.com/watch?v=CvjoXdC-WkM'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BumbleItem emoji={'☕️'} text={'Friends'} />
            </Link>
          </div>
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h2 className='title-text'>my hogwarts house is...</h2>
        <BumbleItemContainer>
          <BumbleItem emoji={'🐍'} text={'Slytherin'} />
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h2 className='title-text'>my top 5 fav animes...</h2>
        <BumbleItemContainer>
          <div className='bumble-clickable'>
            <Link
              to='https://www.youtube.com/watch?v=6m_NwZYVefo'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BumbleItem emoji={'🖤'} text={'Psycho-Pass'} />
            </Link>
          </div>
          <BumbleItem emoji={'💙'} text={'Samurai Champloo'} />
          <div className='bumble-clickable'>
            <Link
              to='https://www.youtube.com/watch?v=UQpIXNb1rKQ'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BumbleItem emoji={'🧡'} text={'Bleach'} />
            </Link>
          </div>
          <BumbleItem emoji={'💚'} text={'Chainsaw Man'} />
          <BumbleItem emoji={'❤️'} text={'InuYasha'} />
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h2 className='title-text'>my pink pilates princess playlist...</h2>
        <BumbleItemContainer>
          <div className='bumble-clickable'>
            <Link
              to='https://open.spotify.com/track/1BxfuPKGuaTgP7aM0Bbdwr?si=d8d7d99069c54407'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BumbleItem emoji={'🎀'} text={'Taylor Swift'} />
            </Link>
          </div>
          <div className='bumble-clickable'>
            <Link
              to='https://open.spotify.com/track/2HRqTpkrJO5ggZyyK6NPWz?si=32002d5ae5b842b4'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BumbleItem emoji={'🎀'} text={'Sabrina Carpenter'} />
            </Link>
          </div>
          <div className='bumble-clickable'>
            <Link
              to='https://open.spotify.com/track/2bl81llf715VEEbAx03yvB?si=52c16ed49f71460d'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BumbleItem emoji={'🎀'} text={'Gracie Abrams'} />
            </Link>
          </div>
          <BumbleItem emoji={'🎀'} text={'One Direction'} />
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h2 className='title-text'>cool places i've been...</h2>
        <BumbleItemContainer>
          <BumbleItem emoji={'🇯🇵'} text={'Tokyo'} />
          <BumbleItem emoji={'🇨🇦'} text={'Vancouver'} />
          <BumbleItem emoji={'🇺🇸'} text={'Los Angeles'} />
        </BumbleItemContainer>
      </BumbleSection>
      <BumbleSection>
        <h2 className='title-text'>i like ice cream</h2>
        <BumbleItemContainer>
          <div className='bumble-clickable'>
            <Link to='/icecream'>
              <BumbleItem emoji={'🍪'} text={"Cookies 'n Cream"} />
            </Link>
          </div>
          <BumbleItem emoji={'🍵'} text={'Matcha'} />
          <BumbleItem emoji={'🫐'} text={'Blueberry'} />
          <BumbleItem emoji={'🍰'} text={'Strawberry Cheesecake'} />
          <BumbleItem emoji={'🥜'} text={'Pistachio'} />
        </BumbleItemContainer>
        <p className='section-bottom' />
      </BumbleSection>
      <img src={image3} alt='Sanrio' />
    </div>
  );
};

export default Bumble;
