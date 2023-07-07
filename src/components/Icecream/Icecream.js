import React from 'react';

import Card from '../UI/Card';
import ruruBakedImg from '../../assets/ruru_baked.jpg';
import funnelCakesImg from '../../assets/funnel_cakes.jpg';
import shucakeImg from '../../assets/shucake.jpg';
import socialBlendImg from '../../assets/social_blend.jpg';
import dspotImg from '../../assets/dspot.jpg';
import dippinDotsImg from '../../assets/dippin_dots.jpg';
import littleDamageImg from '../../assets/little_damage.jpg';
import somisomiImg from '../../assets/somisomi.jpg';
import turnDoughImg from '../../assets/turn_dough.jpg';
import qq3Img from '../../assets/qq3.jpg';
import wonderlandImg from '../../assets/wonderland.jpg';
import mandarin2Img from '../../assets/mandarin2.jpg';
import fugo3Img from '../../assets/fugo3.jpg';
import hanabusaImg from '../../assets/hanabusa.jpg';
import soulCafeImg from '../../assets/soul_cafe.jpg';
import tbearImg from '../../assets/tbear.jpg';
import mcdsImg from '../../assets/mcds.jpg';
import dutchDreamsImg from '../../assets/dutch_dreams.jpg';
import pabloCheeseImg from '../../assets/pablo_cheese.jpg';
import utscImg from '../../assets/utsc.jpg';
import peaceTreatsImg from '../../assets/peace_treats.jpg';
import qq2Img from '../../assets/qq2.jpg';
import petitPotatoImg from '../../assets/petit_potato.jpg';
import fuwafuwaImg from '../../assets/fuwafuwa.jpg';
import taiyakinyc2Img from '../../assets/taiyaki_nyc2.jpg';
import snowTime3Img from '../../assets/snow_time3.jpg';
import mandarinImg from '../../assets/mandarin.jpg';
import taiyakinycImg from '../../assets/taiyaki_nyc.jpg';
import matchaTeaImg from '../../assets/matcha_tea.jpg';
import fugo2Img from '../../assets/fugo2.jpg';
import snowTime2Img from '../../assets/snow_time2.jpg';
import dearfroImg from '../../assets/dearfro.jpg';
import qqImg from '../../assets/qq.jpg';
import sugarMarmaladeImg from '../../assets/sugar_marmalade.jpg';
import snowTimeImg from '../../assets/snow_time.JPG';
import ihaloKrunchImg from '../../assets/ihalo_krunch.JPG';
import fugoImg from '../../assets/fugo.JPG';
import './Icecream.scss';

const Icecream = () => {
  const icecreams = [
    {
      id: 37,
      image: ruruBakedImg,
      name: 'Ruru Baked',
      location: 'Markham, ON',
    },
    {
      id: 36,
      image: funnelCakesImg,
      name: 'Funnel Cakes',
      location: 'Niagara Falls, ON',
    },
    {
      id: 35,
      image: shucakeImg,
      name: 'Shu Cake',
      location: 'Toronto, ON',
    },
    {
      id: 34,
      image: socialBlendImg,
      name: 'The Social Blend',
      location: 'Scarborough, ON',
    },
    {
      id: 33,
      image: dspotImg,
      name: 'D Spot Dessert Café',
      location: 'Toronto, ON',
    },
    {
      id: 32,
      image: dippinDotsImg,
      name: "Dippin' Dots",
      location: 'Santa Monica, CA',
    },
    {
      id: 31,
      image: littleDamageImg,
      name: 'Little Damage',
      location: 'Los Angeles, CA',
    },
    {
      id: 30,
      image: somisomiImg,
      name: 'SomiSomi',
      location: 'Los Angeles, CA',
    },
    {
      id: 29,
      image: turnDoughImg,
      name: 'Turn Dough',
      location: 'Los Angeles, CA',
    },
    {
      id: 28,
      image: qq3Img,
      name: 'QQ Thai Ice Cream',
      location: 'Scarborough, ON',
    },
    {
      id: 27,
      image: wonderlandImg,
      name: "Canada's Wonderland",
      location: 'Vaughan, ON',
    },
    {
      id: 26,
      image: mandarin2Img,
      name: 'Mandarin',
      location: 'Markham, ON',
    },
    {
      id: 25,
      image: fugo3Img,
      name: 'Fugo Desserts',
      location: 'Toronto, ON',
    },
    {
      id: 24,
      image: hanabusaImg,
      name: 'Hanabusa Cafe',
      location: 'Toronto, ON',
    },
    {
      id: 23,
      image: soulCafeImg,
      name: 'Soul Cafe',
      location: 'North York, ON',
    },
    {
      id: 22,
      image: tbearImg,
      name: 'T-Bear',
      location: 'Scarborough, ON',
    },
    {
      id: 21,
      image: mcdsImg,
      name: "McDonald's",
      location: 'Scarborough, ON',
    },
    {
      id: 20,
      image: dutchDreamsImg,
      name: 'Dutch Dreams',
      location: 'Toronto, ON',
    },
    {
      id: 19,
      image: pabloCheeseImg,
      name: 'Pablo Cheese Tart',
      location: 'Toronto, ON',
    },
    {
      id: 18,
      image: utscImg,
      name: 'ACM Waffle Brunch at UTSC',
      location: 'Scarborough, ON',
    },
    {
      id: 17,
      image: peaceTreatsImg,
      name: 'Peace Treats',
      location: 'Toronto, ON',
    },
    {
      id: 16,
      image: qq2Img,
      name: 'QQ Thai Ice Cream',
      location: 'Scarborough, ON',
    },
    {
      id: 15,
      image: petitPotatoImg,
      name: 'Petit Potato',
      location: 'North York, ON',
    },
    {
      id: 14,
      image: fuwafuwaImg,
      name: 'Fuwa Fuwa Japanese Pancakes',
      location: 'Toronto, ON',
    },
    {
      id: 13,
      image: taiyakinyc2Img,
      name: 'Taiyaki NYC',
      location: 'Toronto, ON',
    },
    {
      id: 12,
      image: snowTime3Img,
      name: 'Snow Time',
      location: 'Scarborough, ON',
    },
    {
      id: 11,
      image: mandarinImg,
      name: 'Mandarin',
      location: 'Markham, ON',
    },
    {
      id: 10,
      image: taiyakinycImg,
      name: 'Taiyaki NYC',
      location: 'Toronto, ON',
    },
    {
      id: 9,
      image: matchaTeaImg,
      name: 'Matcha Tea & Dessert',
      location: 'Markham, ON',
    },
    {
      id: 8,
      image: fugo2Img,
      name: 'Fugo Desserts',
      location: 'Toronto, ON',
    },
    {
      id: 7,
      image: snowTime2Img,
      name: 'Snow Time',
      location: 'Scarborough, ON',
    },
    {
      id: 6,
      image: dearfroImg,
      name: 'Dear & Fro',
      location: 'Scarborough, ON',
    },
    {
      id: 5,
      image: qqImg,
      name: 'QQ Thai Ice Cream',
      location: 'Scarborough, ON',
    },
    {
      id: 4,
      image: sugarMarmaladeImg,
      name: 'Sugar Marmalade',
      location: 'Scarborough, ON',
    },
    {
      id: 3,
      image: snowTimeImg,
      name: 'Snow Time',
      location: 'Scarborough, ON',
    },
    {
      id: 2,
      image: ihaloKrunchImg,
      name: 'iHalo Krunch',
      location: 'Toronto, ON',
    },
    {
      id: 1,
      image: fugoImg,
      name: 'Fugo Desserts',
      location: 'Toronto, ON',
    },
  ];

  return (
    <div id='icecream'>
      <h2 id='icecream-title'>i like ice cream.</h2>
      <Card>
        <div id='icecream-gallery'>
          {icecreams.map((icecream) => {
            return (
              <div key={icecream.id} className='icecream-block'>
                <div className='icecream-info'>
                  <div className='icecream-name'>{icecream.name}</div>
                  <div className='icecream-location'>
                    📍&nbsp;&nbsp;{icecream.location}
                  </div>
                </div>
                <img src={icecream.image} alt={icecream.name} />
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Icecream;
