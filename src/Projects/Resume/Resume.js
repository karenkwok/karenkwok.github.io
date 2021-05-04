import "./Resume.scss";
import { useHistory } from "react-router-dom";

function Resume() {
  const history = useHistory();

  return (
    <div>
      Page under construction. Check back soon!
      <button onClick={history.goBack}>Back</button>
    </div>
  );
}

export default Resume;
