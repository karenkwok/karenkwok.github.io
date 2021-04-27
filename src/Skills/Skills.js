import "./Skills.scss";

function Skills() {
  return (
    <div id="skills-section">
      <h2>I have experience with...</h2>
      <div id="skill-types">
        <div>
          <h3>Web</h3>
          <div className="skill-names">
            <h5>React</h5>
            <h5>Node.js</h5>
            <h5>Express.js</h5>
            <h5>SCSS</h5>
            <h5>MongoDB</h5>
            <h5>JavaScript</h5>
            <h5>GraphQL</h5>
            <h5>HTML</h5>
            <h5>CSS</h5>
          </div>
        </div>
        <div>
          <h3>Languages</h3>
          <div className="skill-names">
            <h5>Python</h5>
            <h5>Java</h5>
            <h5>C#</h5>
            <h5>C</h5>
            <h5>R</h5>
          </div>
        </div>
        <div>
          <h3>Technologies</h3>
          <div className="skill-names">
            <h5>Heroku</h5>
            <h5>Unity</h5>
            <h5>Git</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
