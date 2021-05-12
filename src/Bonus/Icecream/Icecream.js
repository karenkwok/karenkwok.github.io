import "./Icecream.scss";
import { useHistory } from "react-router-dom";

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

function Icecream() {
  const history = useHistory();

  window.scrollTo({
    top: 0,
  });

  return (
    <div>
      <div id="icecream-top">
        <h4 id="icecream-top-first-line">Not a photographer or foodie.</h4>
        <button onClick={history.goBack}>Back</button>
      </div>
      <h2 id="icecream-second-line">Just a girl who loves ice cream.</h2>
      <div id="icecream-gallery">
        <img src={qq4} />
        <img src={qq3} />
        <img src={wonderland} />
        <img src={mandarin2} />
        <img src={soulcafe} />
        <img src={tbearwaffle} />
        <img src={mcdonalds} />
        <img src={cafeprincess} />
        <img src={dutchdreams} />
        <img src={koishi} />
        <img src={pablocheese} />
        <img src={acm} />
        <img src={peacetreats2} />
        <img src={peacetreats} />
        <img src={qq2} />
        <img src={petitpotato} />
        <img src={taiyakinyc2} />
        <img src={snowtime4} />
        <img src={snowtime3} />
        <img src={mandarin} />
        <img src={taiyakinyc} />
        <img src={fugo2} />
        <img src={snowtime2} />
        <img src={dearfro} />
        <img src={qq} />
        <img src={snowtime} />
        <img src={ihalokrunch} />
        <img src={fugo} />
      </div>
    </div>
  );
}

export default Icecream;
