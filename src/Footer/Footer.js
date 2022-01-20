import "./Footer.scss";
import React from "react";

function Footer() {
  const email = "karenkwok013@gmail.com";
  const [copyText, setCopyText] = React.useState("Click to copy");

  const copyFunction = () => {
    navigator.clipboard.writeText(email);

    setCopyText("Copied!");
  };

  const outFunc = () => {
    setCopyText("Click to copy");
  };

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
      <div id="footer-email">
        <h4
          id="email"
          class="tooltip"
          onClick={copyFunction}
          onMouseOut={outFunc}
        >
          {email}
          <span class="tooltiptext" id="myToolTip">
            {copyText}
          </span>
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
