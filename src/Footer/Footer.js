import "./Footer.scss";

function Footer() {
  const copyFunction = () => {
    navigator.clipboard.writeText("karenkwok013@gmail.com");

    const tooltip = document.getElementById("myToolTip");
    tooltip.innerHTML = "Copied!";
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
        <h4 id="email" class="tooltip" onClick={copyFunction}>
          karenkwok013@gmail.com
          <span class="tooltiptext" id="myToolTip">
            Click to copy
          </span>
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
