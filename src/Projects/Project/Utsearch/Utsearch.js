import "./Utsearch.scss";
import "../Projectpage.scss";
import { useHistory } from "react-router-dom";

function Utsearch() {
  const history = useHistory();

  return (
    <div>
      <div className="project-page-titles">
        <h2 className="project-page-title">UTSearCh</h2>
        <button onClick={history.goBack}>Back</button>
      </div>
      <p>February 2021 - April 2021</p>
      <div>
        <Button variant="outlined">Default</Button>
        <button><i className="fab fa-react"></i> App</button>
        <button><i className="fab fa-youtube"></i> YouTube Demo</button>
        <button><i className="fab fa-github"></i> GitHub Repo</button>
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
