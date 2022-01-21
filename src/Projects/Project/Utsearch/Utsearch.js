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
          <a
            href="https://utsearch.tech"
            target="_blank"
            rel="noreferrer"
            className="white-text"
          >
            <i class="fab fa-react"></i>&nbsp;&nbsp;&nbsp;<span>App</span>
          </a>
        </button>
        <button className="link-btns non-react-app">
          <a
            href="https://www.youtube.com/watch?v=HAx83RlzHaU"
            target="_blank"
            rel="noreferrer"
            className="dark-text"
          >
            <i class="fab fa-youtube"></i>&nbsp;&nbsp;&nbsp;<span>Demo</span>
          </a>
        </button>
        <button className="link-btns non-react-app">
          <a
            href="https://github.com/karenkwok/utsearch"
            target="_blank"
            rel="noreferrer"
            className="dark-text"
          >
            <i class="fab fa-github"></i>&nbsp;&nbsp;&nbsp;<span>Repo</span>
          </a>
        </button>
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
      <h4>
        Working in a team of two, we created an online networking platform with
        videochat and location sharing functionalities for students to meet and
        connect with other students during the pandemic.
      </h4>
    </div>
  );
}

export default Utsearch;
