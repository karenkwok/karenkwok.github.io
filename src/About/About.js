import "./About.scss";

function About() {
  return (
    <div id="about-section">
      <h4>Hey, I'm Karen! 👋</h4>
      <h4 id="about-second-line">
        I'm a software developer and recent grad from the University of Toronto.
      </h4>
      <h4 id="about-third-line">
        Currently @{" "}
        <a
          href="https://milanosoftware.com/"
          target="_blank"
          rel="noreferrer"
          className="purple-highlight"
        >
          Milano Software
        </a>
        .
      </h4>
    </div>
  );
}

export default About;
