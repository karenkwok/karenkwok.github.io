import "./Projects.scss";
import Project from "./Project/Project";
import happii from "./happii.png";
import idklmao from "./idklmao.png";
import notinstagram from "./notinstagram.png";
import piano from "./piano.png";
import resume from "./KarenKwok_Resume.pdf";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div id="projects-section">
      <h2>Here is what I've been working on...</h2>
      <div id="projects-grid">
        <div id="projects-squares">
          <Link to="/happii">
            <Project name="happii" image={happii}></Project>
          </Link>
          <Link to="/utsearch">
            <Project name="UTSearCh" image={idklmao}></Project>
          </Link>
          <Link to="/notinstagram">
            <Project name="notInstagram" image={notinstagram}></Project>
          </Link>
          <Link to="/neurorehab-project">
            <Project name="NeuroRehab Project" image={piano}></Project>
          </Link>
        </div>
      </div>
      {/* <h4 id="projects-line">
        For more details, please see{" "}
        <a href={resume} target="_blank" rel="noreferrer">
          <span className="purple-highlight">my resume</span>.
        </a>
      </h4> */}
    </div>
  );
}

export default Projects;
