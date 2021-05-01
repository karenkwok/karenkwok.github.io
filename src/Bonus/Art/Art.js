import "./Art.scss";
import { useHistory } from "react-router-dom";

function Art() {
  const history = useHistory();

  return (
    <div>
      art!
      <button onClick={history.goBack}>X</button>
    </div>
  );
}

export default Art;
