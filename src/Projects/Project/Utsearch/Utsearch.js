import "./Utsearch.scss";
import "../Projectpage.scss";
import { Button } from "@material-ui/core";

function Utsearch() {
  window.scrollTo({
    top: 0,
  });

  return (
    <div id="utsearch-page">
      <div className="project-page-titles">
        <h2 className="project-page-title">UTSearCh</h2>
      </div>
      <p className="project-dates">
        <i class="far fa-calendar-alt"></i>&nbsp;&nbsp;Feb 2021 – Apr 2021
      </p>
      <div className="links">
        <button className="link-btns react-app">
          <i class="fab fa-react"></i>&nbsp;&nbsp;&nbsp;<span>App</span>
        </button>
        <button className="link-btns non-react-app">
          <i class="fab fa-youtube"></i>&nbsp;&nbsp;&nbsp;<span>Demo</span>
        </button>
        <button className="link-btns non-react-app">
          <i class="fab fa-github"></i>&nbsp;&nbsp;&nbsp;<span>Repo</span>
        </button>
      </div>
      {/* <div className="utsearch-btns">
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
          <a
            href="https://github.com/karenkwok/utsearch"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              id="utsearch-github-btn"
            >
              <i className="fab fa-github" id="utsearch-github"></i>
              &nbsp;&nbsp;&nbsp;GitHub Repo
            </Button>
          </a>
        </div>
      </div> */}
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
      <h4>
        Working in a team of two, we created an online networking platform with
        videochat and location sharing functionalities for students to meet and
        connect with other students during the pandemic.
      </h4>
    </div>
  );
}

export default Utsearch;
