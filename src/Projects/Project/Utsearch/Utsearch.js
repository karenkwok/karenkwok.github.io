import "./Utsearch.scss";
import "../Projectpage.scss";
import { useHistory } from "react-router-dom";

function Utsearch() {
  const history = useHistory();

  return (
    <div>
      utsearch!
      <button onClick={history.goBack}>X</button>
    </div>
  );
}

export default Utsearch;
