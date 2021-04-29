import "./Projects.scss";
import Project from "./Project/Project";

function Projects() {
  return (
    <div id="projects-section">
      <h2>Here is what I've been working on...</h2>
      <div id="projects-squares">
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </div>
      <h4>
        For more details, please see{" "}
        <a className="purple-highlight">my resume</a>.
      </h4>
    </div>
  );
}

export default Projects;
