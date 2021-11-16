import "./Skills.scss";

function Skills() {
  return (
    <div id="skills-section">
      <h2>I have experience with...</h2>
      <div id="skill-types">
        <div id="skill-web">
          <h3>Web</h3>
          <div className="skill-names">
            <h5 className="skill-bubble">React</h5>
            <h5 className="skill-bubble">Node.js</h5>
            <h5 className="skill-bubble">Express.js</h5>
            <h5 className="skill-bubble">Django</h5>
            <h5 className="skill-bubble">PostgreSQL</h5>
            <h5 className="skill-bubble">MongoDB</h5>
            <h5 className="skill-bubble">JavaScript</h5>
            <h5 className="skill-bubble">GraphQL</h5>
            <h5 className="skill-bubble">SCSS</h5>
            <h5 className="skill-bubble">HTML</h5>
            <h5 className="skill-bubble">CSS</h5>
          </div>
        </div>
        <div id="skill-languages">
          <h3>Languages</h3>
          <div className="skill-names">
            <h5 className="skill-bubble">Python</h5>
            <h5 className="skill-bubble">Java</h5>
            <h5 className="skill-bubble">C#</h5>
            <h5 className="skill-bubble">C</h5>
            <h5 className="skill-bubble">R</h5>
          </div>
        </div>
        <div id="skill-technologies">
          <h3>Technologies</h3>
          <div className="skill-names">
            <h5 className="skill-bubble">Heroku</h5>
            <h5 className="skill-bubble">Unity</h5>
            <h5 className="skill-bubble">Git</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
