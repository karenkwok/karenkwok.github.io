import "./Neurorehab.scss";
import { Link } from "react-router-dom";

function Neurorehab() {
  return (
    <div>
      <div className="project-page-title">
        <h2>NeuroRehab Project</h2>
        <Link to="/">X</Link>
      </div>
      <h4>July 2020 - August 2020 (1 month)</h4>
      <div className="project-page-skills">
        <h5>C#</h5>
        <h5>Unity</h5>
      </div>
      <h4>
        As a volunteer for{" "}
        <a href="https://sensetech.ca" target="_blank" rel="noreferrer">
          SenseTech Solutions
        </a>
        , I developed a VR piano simulator game for patients recovering from a
        stroke to help them regain their motor and coordination skills.
      </h4>
      <h4>
        The game teaches players how to play various songs with the Haptic
        Glove, and displays performance statistics.
      </h4>
    </div>
  );
}

export default Neurorehab;
