import "./Projects.scss";
import Project from "./Project/Project";
import idklmao from "./idklmao.png";
import piano from "./piano.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div id="projects-section">
      <h2>Here is what I've been working on...</h2>
      <div id="projects-squares">
        <Project name="Coming Soon.."></Project>
        <Link to="/utsearch"><Project name="UTSearCh" image={idklmao}></Project></Link>
        <Project name="NeuroRehab Project" image={piano}></Project>
      </div>
      <h4>
        For more details, please see{" "}
        <a className="purple-highlight">my resume</a>.
      </h4>
    </div>
  );
}

export default Projects;
