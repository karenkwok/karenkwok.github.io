import "./Utsearch.scss";
import "../Projectpage.scss";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function Utsearch() {
  const history = useHistory();

  window.scrollTo({
    top: 0,
  });

  return (
    <div>
      <div className="project-page-titles">
        <h2 className="project-page-title">UTSearCh</h2>
        <Button variant="outlined" size="large" onClick={history.goBack}>
          <i class="fas fa-chevron-left"></i>&nbsp;&nbsp;Back
        </Button>
      </div>
      <p>February 2021 - April 2021</p>
      <div className="utsearch-btns">
        <div className="utsearch-btn">
          <a href="https://utsearch.tech" target="_blank" rel="noreferrer">
            <Button
              variant="contained"
              color="primary"
              size="large"
              id="utsearch-app-btn"
            >
              <i className="fab fa-react" id="utsearch-app"></i>
              &nbsp;&nbsp;&nbsp;App
            </Button>
          </a>
        </div>
        <div className="utsearch-btn">
          <a
            href="https://www.youtube.com/watch?v=HAx83RlzHaU"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              id="utsearch-youtube-btn"
            >
              <i className="fab fa-youtube" id="utsearch-youtube"></i>
              &nbsp;&nbsp;&nbsp;YouTube Demo
            </Button>
          </a>
        </div>
        <div className="utsearch-btn">
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            id="utsearch-github-btn"
          >
            <i className="fab fa-github" id="utsearch-github"></i>
            &nbsp;&nbsp;&nbsp;GitHub Repo
          </Button>
        </div>
      </div>
      <div className="skill-names">
        <h5 className="skill-bubble">React</h5>
        <h5 className="skill-bubble">GraphQL</h5>
        <h5 className="skill-bubble">MongoDB</h5>
        <h5 className="skill-bubble">JavaScript</h5>
        <h5 className="skill-bubble">Node.js</h5>
        <h5 className="skill-bubble">Express.js</h5>
        <h5 className="skill-bubble">PeerJS</h5>
        <h5 className="skill-bubble">Socket.IO</h5>
        <h5 className="skill-bubble">Google Maps API</h5>
        <h5 className="skill-bubble">Heroku</h5>
        <h5 className="skill-bubble">HTML</h5>
        <h5 className="skill-bubble">CSS</h5>
      </div>
      <h4>
        Working in a team of two, we created an online networking platform as
        our final project for a senior year web development course at the
        University of Toronto.
      </h4>
      <h4>
        Our goal was to create a space where students could easily meet and
        connect with other students based on their common interests. Due to the
        ongoing pandemic, it is especially difficult for students to socialize
        and make new friends, but that's where our app comes in.
      </h4>
      <h4>
        UTSearCh is a web app that allows for real-time communication through
        video and voice chat. Users can directly call other users, or they can
        choose to be randomly paired with another online user to chat with.
      </h4>
      <h4>
        Users can also add tags to their profiles which are descriptive keywords
        to help other users find them. This leads to our Search feature where
        users can search for students by their username or by tags to find
        others with certain interests. This would easily enable students to meet
        potential friends that share something in common with them. For example,
        users could search for "painting" to find students that also like
        painting.
      </h4>
      <h4>
        Upon finding other students, users may choose to add them as friends, or
        block them to prevent further interactions with them. As friends, users
        can view each others' locations using our Maps feature.
      </h4>
    </div>
  );
}

export default Utsearch;
