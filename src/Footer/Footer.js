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
        <a href="mailto:karenk.kwok@mail.utoronto.ca?subject=You're Hired!&body=Congratulations! You got the job!!">
          <Button variant="outlined" size="large" id="hire-me-btn">hire me</Button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
