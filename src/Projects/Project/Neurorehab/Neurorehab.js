import "./Neurorehab.scss";
import "../Projectpage.scss";

function Neurorehab() {
  window.scrollTo({
    top: 0,
  });

  return (
    <div id="neurorehab-page">
      <div className="project-page-titles">
        <h2 className="project-page-title">NeuroRehab Project</h2>
      </div>
      <p className="project-dates">Jul 2020 – Aug 2020</p>
      <div className="skill-names">
        <h5 className="skill-bubble">C#</h5>
        <h5 className="skill-bubble">Unity</h5>
      </div>
      <h4>
        As a volunteer for{" "}
        <a
          href="https://sensetech.ca"
          target="_blank"
          rel="noreferrer"
          className="purple-highlight"
        >
          SenseTech Solutions
        </a>
        , I developed a VR piano simulator game as part of stroke rehabilitation
        for hospital patients to aid in their recovery by improving their motor
        and coordination skills.
      </h4>
      <h4>
        The game teaches players how to play various songs on the piano with the{" "}
        <a
          href="https://www.google.com/search?q=what+are+haptic+gloves&rlz=1C1CHBF_enCA772CA772&sxsrf=ALeKk03fNYeIO-WmdQxwTU6ZtBRZOn2pZg%3A1620018323928&ei=k4SPYJCPONS5tAbTsIjADw&oq=what+are+haptic+glove&gs_lcp=Cgdnd3Mtd2l6EAMYADICCAA6BwgjELADECc6BwgAEEcQsAM6BwgAELADEEM6BwgjELACECc6BAgAEA06BggAEAcQHlCKgQFY5YgBYMGUAWgBcAJ4AIABcogB3QeSAQM2LjSYAQCgAQGqAQdnd3Mtd2l6yAEKwAEB&sclient=gws-wiz"
          target="_blank"
          rel="noreferrer"
          className="purple-highlight"
        >
          Haptic Glove
        </a>
        , and displays performance statistics.
      </h4>
    </div>
  );
}

export default Neurorehab;
