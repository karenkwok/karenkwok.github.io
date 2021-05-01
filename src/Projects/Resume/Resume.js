import "./Resume.scss";
import { useHistory } from "react-router-dom";

function Resume() {
  const history = useHistory();

  return (
    <div>
      resume!
      <button onClick={history.goBack}>X</button>
    </div>
  );
}

export default Resume;
