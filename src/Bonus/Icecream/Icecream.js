import "./Icecream.scss";
import React from "react";

import roji from "./Pictures/roji.jpg";
import qq4 from "./Pictures/qq4.jpg";
import qq3 from "./Pictures/qq3.jpg";
import wonderland from "./Pictures/wonderland.jpg";
import mandarin2 from "./Pictures/mandarin2.jpg";
import soulcafe from "./Pictures/soulcafe.jpg";
import tbearwaffle from "./Pictures/tbearwaffle.jpg";
import mcdonalds from "./Pictures/mcdonalds.jpg";
import cafeprincess from "./Pictures/cafeprincess.jpg";
import dutchdreams from "./Pictures/dutchdreams.jpg";
import koishi from "./Pictures/koishi.jpg";
import pablocheese from "./Pictures/pablocheese.jpg";
import acm from "./Pictures/acm.jpg";
import peacetreats2 from "./Pictures/peacetreats2.jpg";
import peacetreats from "./Pictures/peacetreats.jpg";
import qq2 from "./Pictures/qq2.jpg";
import petitpotato from "./Pictures/petitpotato.jpg";
import taiyakinyc2 from "./Pictures/taiyakinyc2.jpg";
import snowtime4 from "./Pictures/snowtime4.jpg";
import snowtime3 from "./Pictures/snowtime3.jpg";
import mandarin from "./Pictures/mandarin.jpg";
import taiyakinyc from "./Pictures/taiyakinyc.jpg";
import fugo2 from "./Pictures/fugo2.jpg";
import snowtime2 from "./Pictures/snowtime2.jpg";
import dearfro from "./Pictures/dearfro.jpg";
import qq from "./Pictures/qq.jpg";
import snowtime from "./Pictures/snowtime.JPG";
import ihalokrunch from "./Pictures/ihalokrunch.JPG";
import fugo from "./Pictures/fugo.JPG";
import { CircularProgress } from "@material-ui/core";

class IcecreamData {
  constructor(image, location) {
    this.image = image;
    this.location = location;
  }
}

function Icecream() {
  const [switchGallery, setSwitchGallery] = React.useState("hidden-gallery");
  const [switchCircle, setSwitchCircle] = React.useState(
    <CircularProgress></CircularProgress>
  );
  const [counter, setCounter] = React.useState(0);

  window.scrollTo({
    top: 0,
  });

  const icecreams = [
    new IcecreamData(roji, "Roji Monster Ice Cream"),
    new IcecreamData(qq4, "QQ Thai Ice Cream"),
    new IcecreamData(qq3, "QQ Thai Ice Cream"),
    new IcecreamData(wonderland, "Canada's Wonderland"),
    new IcecreamData(mandarin2, "Mandarin"),
    new IcecreamData(soulcafe, "Soul Cafe"),
    new IcecreamData(tbearwaffle, "T-Bear"),
    new IcecreamData(mcdonalds, "McDonald's"),
    new IcecreamData(cafeprincess, "Café Princess"),
    new IcecreamData(dutchdreams, "Dutch Dreams"),
    new IcecreamData(koishi, "Koishi"),
    new IcecreamData(pablocheese, "Pablo Cheese Tart"),
    new IcecreamData(acm, "ACM Waffle Brunch"),
    new IcecreamData(peacetreats2, "Peace Treats"),
    new IcecreamData(peacetreats, "Peace Treats"),
    new IcecreamData(qq2, "QQ Thai Ice Cream"),
    new IcecreamData(petitpotato, "Petit Potato"),
    new IcecreamData(taiyakinyc2, "Taiyaki NYC"),
    new IcecreamData(snowtime4, "Snow Time"),
    new IcecreamData(snowtime3, "Snow Time"),
    new IcecreamData(mandarin, "Mandarin"),
    new IcecreamData(taiyakinyc, "Taiyaki NYC"),
    new IcecreamData(fugo2, "Fugo Desserts"),
    new IcecreamData(snowtime2, "Snow Time"),
    new IcecreamData(dearfro, "Dear&Fro"),
    new IcecreamData(qq, "QQ Thai Ice Cream"),
    new IcecreamData(snowtime, "Snow Time"),
    new IcecreamData(ihalokrunch, "iHalo Krunch"),
    new IcecreamData(fugo, "Fugo Desserts"),
  ];

  const imageLoaded = () => {
    if (counter === icecreams.length - 1) {
      // reveal the gallery
      setSwitchGallery("visible-gallery");
      setSwitchCircle(null);
    }
    setCounter(counter + 1);
  };
  return (
    <div>
      <div className="project-page-titles">
        <h2 className="project-page-title">Just a girl who loves ice cream.</h2>
      </div>
      <h4>
        A gallery of my ice cream adventures with friends. I just really love
        ice cream. 🙃
      </h4>
      <h4>&nbsp;</h4>
      <div className="yes-circle">{switchCircle}</div>
      <div id="icecream-gallery" className={switchGallery}>
        {icecreams.map((oneIcecream) => {
          return (
            <div className="icecream-square">
              <div className="icecream-title">{oneIcecream.location}</div>
              <img
                src={oneIcecream.image}
                alt={oneIcecream.location}
                onLoad={imageLoaded}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Icecream;
