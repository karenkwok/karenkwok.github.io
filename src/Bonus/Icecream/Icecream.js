import "./Icecream.scss";
import { useHistory } from "react-router-dom";
import fugo from "./Pictures/fugo.JPG";
import ihalokrunch from "./Pictures/ihalokrunch.JPG";
import snowtime from "./Pictures/snowtime.JPG";
import qq from "./Pictures/qq.jpg";
import dearfro from "./Pictures/dearfro.jpg";
import snowtime2 from "./Pictures/snowtime2.jpg";
import fugo2 from "./Pictures/fugo2.jpg";
import taiyakinyc from "./Pictures/taiyakinyc.jpg";
import mandarin from "./Pictures/mandarin.jpg";
import snowtime3 from "./Pictures/snowtime3.jpg";
import snowtime4 from "./Pictures/snowtime4.jpg";
import taiyakinyc2 from "./Pictures/taiyakinyc2.jpg";
import petitpotato from "./Pictures/petitpotato.jpg";
import qq2 from "./Pictures/qq2.jpg";
import peacetreats from "./Pictures/peacetreats.jpg";
import peacetreats2 from "./Pictures/peacetreats2.jpg";
import acm from "./Pictures/acm.jpg";
import pablocheese from "./Pictures/pablocheese.jpg";
import koishi from "./Pictures/koishi.jpg";
import dutchdreams from "./Pictures/dutchdreams.jpg";
import cafeprincess from "./Pictures/cafeprincess.jpg";
import mcdonalds from "./Pictures/mcdonalds.jpg";
import tbearwaffle from "./Pictures/tbearwaffle.jpg";
import soulcafe from "./Pictures/soulcafe.jpg";
import mandarin2 from "./Pictures/mandarin2.jpg";
import wonderland from "./Pictures/wonderland.jpg";
import qq3 from "./Pictures/qq3.jpg";
import qq4 from "./Pictures/qq4.jpg";

function Icecream() {
  const history = useHistory();

  return (
    <div>
      icecream!
      <button onClick={history.goBack}>X</button>
    </div>
  );
}

export default Icecream;
