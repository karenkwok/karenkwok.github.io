import "./Art.scss";
import { useHistory } from "react-router-dom";

function Art() {
  const history = useHistory();

  window.scrollTo({
    top: 0,
  });

  return (
    <div>
      art!
      <button onClick={history.goBack}>X</button>
    </div>
  );
}

export default Art;
