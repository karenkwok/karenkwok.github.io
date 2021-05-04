import "./Icecream.scss";
import { useHistory } from "react-router-dom";
import fugo from "./Pictures/fugo.JPG";
import ihalokrunch from "./Pictures/ihalokrunch.JPG";
import snowtime from "./Pictures/snowtime.JPG";

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
