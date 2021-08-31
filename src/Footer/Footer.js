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
        <a href="mailto:karenk.kwok@mail.utoronto.ca?subject=A New Opportunity for Karen????&body=Dear Karen,%0D%0A%0D%0A%0D%0ACongratulations! We are delighted to offer you the position of [insert job title here] starting ASAP.%0D%0A%0D%0AHaha.. Just kidding. But in the meantime, please feel free to connect with me and I'd be happy to chat with you and share future opportunities that I think would be a great fit for you.%0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0A%0D%0ABest,%0D%0A[insert your name here]%0D%0A[insert job title/company here]%0D%0A[insert email/contact info here]%0D%0A%0D%0A">
          <Button variant="outlined" size="large">
            <i className="far fa-paper-plane" id="paper-plane"></i>
            &nbsp;&nbsp;hire me
          </Button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
