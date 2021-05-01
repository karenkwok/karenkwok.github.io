import "./Icecream.scss";
import { useHistory } from "react-router-dom";

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
