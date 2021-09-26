import "./Footer.scss";
import { Button } from "@material-ui/core";

function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/karen-kwok/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in icon"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/karenkwok"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-alt icon"></i>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="mailto:karenk.kwok@mail.utoronto.ca?subject=You're Hired!">
          <Button variant="outlined" size="large" id="hire-me-btn">
            <i className="far fa-paper-plane" id="paper-plane"></i>
            &nbsp;&nbsp;Hire Me!
          </Button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
