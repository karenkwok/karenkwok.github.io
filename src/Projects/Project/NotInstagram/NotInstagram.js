import "./NotInstagram.scss";
import "../Projectpage.scss";

function NotInstagram() {
  window.scrollTo({
    top: 0,
  });

  return (
    <div id="notinstagram-page">
      <div className="project-page-titles">
        <h2 className="project-page-title">notInstagram</h2>
      </div>
      <p className="project-dates">
        <i class="far fa-calendar-alt"></i>&nbsp;&nbsp;Jan 2021 – Feb 2021
      </p>
      <div className="links">
        <button className="link-btns react-app">
          <a
            href="http://not-ig.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="white-text"
          >
            <i class="fab fa-react"></i>&nbsp;&nbsp;&nbsp;<span>App</span>
          </a>
        </button>
        <button className="link-btns non-react-app">
          <a
            href="https://github.com/karenkwok/notInstagram"
            target="_blank"
            rel="noreferrer"
            className="dark-text"
          >
            <i class="fab fa-github"></i>&nbsp;&nbsp;&nbsp;<span>Repo</span>
          </a>
        </button>
      </div>
      <div className="skill-names">
        <h5 className="skill-bubble">Node.js</h5>
        <h5 className="skill-bubble">Express.js</h5>
        <h5 className="skill-bubble">JavaScript</h5>
        <h5 className="skill-bubble">Heroku</h5>
        <h5 className="skill-bubble">HTML</h5>
        <h5 className="skill-bubble">CSS</h5>
      </div>
      <h4>
        As a project for a web development course, I created a web gallery for
        users to post and comment on images.
      </h4>
      <h4>At the end of the course, I deployed it for fun. 🤪</h4>
    </div>
  );
}

export default NotInstagram;
