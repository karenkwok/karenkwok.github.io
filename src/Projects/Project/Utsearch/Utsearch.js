import "./Utsearch.scss";
import "../Projectpage.scss";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function Utsearch() {
  const history = useHistory();

  return (
    <div>
      <div className="project-page-titles">
        <h2 className="project-page-title">UTSearCh</h2>
        <button onClick={history.goBack}>Back</button>
      </div>
      <p>February 2021 - April 2021</p>
      <div className="utsearch-btns">
        <div className="utsearch-btn">
          <a href="https://utsearch.tech" target="_blank" rel="noreferrer">
            <Button
              variant="contained"
              color="primary"
              size="large"
              id="utsearch-app-btn"
            >
              <i className="fab fa-react" id="utsearch-app"></i>
              &nbsp;&nbsp;&nbsp;App
            </Button>
          </a>
        </div>
        <div className="utsearch-btn">
          <a
            href="https://www.youtube.com/watch?v=HAx83RlzHaU"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              id="utsearch-youtube-btn"
            >
              <i className="fab fa-youtube" id="utsearch-youtube"></i>
              &nbsp;&nbsp;&nbsp;YouTube Demo
            </Button>
          </a>
        </div>
        <div className="utsearch-btn">
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            id="utsearch-github-btn"
          >
            <i className="fab fa-github" id="utsearch-github"></i>
            &nbsp;&nbsp;&nbsp;GitHub Repo
          </Button>
        </div>
      </div>
      <div className="skill-names">
        <h5 className="skill-bubble">React</h5>
        <h5 className="skill-bubble">GraphQL</h5>
        <h5 className="skill-bubble">MongoDB</h5>
        <h5 className="skill-bubble">JavaScript</h5>
        <h5 className="skill-bubble">Node.js</h5>
        <h5 className="skill-bubble">Express.js</h5>
        <h5 className="skill-bubble">PeerJS</h5>
        <h5 className="skill-bubble">Socket.IO</h5>
        <h5 className="skill-bubble">Google Maps API</h5>
        <h5 className="skill-bubble">Heroku</h5>
        <h5 className="skill-bubble">HTML</h5>
        <h5 className="skill-bubble">CSS</h5>
      </div>
    </div>
  );
}

export default Utsearch;
