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
      <p className="project-dates">Jan 2021 – Feb 2021</p>
      <div className="skill-names">
        <h5 className="skill-bubble">Node.js</h5>
        <h5 className="skill-bubble">Express.js</h5>
        <h5 className="skill-bubble">JavaScript</h5>
        <h5 className="skill-bubble">HTML</h5>
        <h5 className="skill-bubble">CSS</h5>
      </div>
      <h4>
        As a project for a web development course, I created a web gallery (
        <span className="text-italics">not</span> like{" "}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="purple-highlight"
        >
          Instagram
        </a>
        ;) for users to post and comment on images.
      </h4>
      <h4>After the course, I deployed it for fun. 🤪</h4>
    </div>
  );
}

export default NotInstagram;
