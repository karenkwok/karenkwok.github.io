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
      <div className="skill-names">
        <h5 className="skill-bubble">React</h5>
        <h5 className="skill-bubble">Redux</h5>
        <h5 className="skill-bubble">Python</h5>
        <h5 className="skill-bubble">Django</h5>
        <h5 className="skill-bubble">PostgreSQL</h5>
        <h5 className="skill-bubble">Heroku</h5>
        <h5 className="skill-bubble">JavaScript</h5>
        <h5 className="skill-bubble">HTML</h5>
        <h5 className="skill-bubble">SCSS</h5>
      </div>
      <h4>
        Created a web application for users to track their daily water intake
        and visualize trends.
      </h4>
      <h4>
        This project was started by my friend and I, in an effort to improve our
        own water-drinking habits.
      </h4>
    </div>
  );
}

export default Happii;
