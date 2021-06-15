import "./Art.scss";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function Art() {
  const history = useHistory();

  window.scrollTo({
    top: 0,
  });

  return (
    <div>
      <div className="project-page-titles">
        <h2 className="project-page-title">A Retired Painter's Portfolio</h2>
        <Button variant="outlined" size="large" onClick={history.goBack}>
          <i class="fas fa-chevron-left"></i>&nbsp;&nbsp;Back
        </Button>
      </div>
    </div>
  );
}

export default Art;
