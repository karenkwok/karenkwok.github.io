import "./Happii.scss";
import "../Projectpage.scss";

function Happii() {
  window.scrollTo({
    top: 0,
  });

  return (
    <div id="happii-page">
      <div className="project-page-titles">
        <h2 className="project-page-title">happii</h2>
      </div>
      <p className="project-dates">
        <i class="far fa-calendar-alt"></i>&nbsp;&nbsp;Nov 2021 – Jan 2022
      </p>
      <div className="links">
        <button className="link-btns react-app">
          <i class="fab fa-react"></i>&nbsp;&nbsp;&nbsp;<span>App</span>
        </button>
        <button className="link-btns non-react-app">
          <i class="fab fa-github"></i>&nbsp;&nbsp;&nbsp;<span>Repo</span>
        </button>
      </div>
      <div className="skill-names">
        <h5 className="skill-bubble">React</h5>
        <h5 className="skill-bubble">Redux</h5>
        <h5 className="skill-bubble">JavaScript</h5>
        <h5 className="skill-bubble">Python</h5>
        <h5 className="skill-bubble">Django</h5>
        <h5 className="skill-bubble">PostgreSQL</h5>
        <h5 className="skill-bubble">Heroku</h5>
        <h5 className="skill-bubble">HTML</h5>
        <h5 className="skill-bubble">Sass</h5>
      </div>
      <h4>
        A web application for users to track their daily water intake and
        visualize trends. Currently expanding the app to track eating and
        sleeping trends as well.
      </h4>
      <h4>
        This project was originally started by a friend and I, in an effort to
        improve our own water-drinking habits.
      </h4>
    </div>
  );
}

export default Happii;
