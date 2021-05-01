import "./Bonus.scss";
import { Link } from "react-router-dom";

function Bonus() {
  return (
    <div id="bonus-section">
      <h2>A little bit more about me...</h2>
      <h4 className="no-margin-bottom">
        I'm also an <b>amateur pianist</b> 🎹, <b>book lover</b> 📚, and{" "}
        <Link to="/art"><b>retired painter</b> 🎨</Link>.
      </h4>
      <h4 className="no-margin-bottom yes-margin-top">
        I have a <b>pet turtle</b>. We've been together for <b>10 years</b> now!
        🐢
      </h4>
      <h4 className="no-margin-bottom yes-margin-top">
        My favourite foods are <b>sushi</b> 🍣, <Link to="/icecream"><b>ice cream</b> 🍦</Link>, and{" "}
        <a
          href="https://www.popeyeschicken.ca"
          target="_blank"
          rel="noreferrer"
          id="popeyes"
        >
          <b id="chicken">fried chicken</b> 🍗
        </a>{" "}
        .
      </h4>
      <h4 className="yes-margin-top">
        Did I mention I'm a huuuge <b>Pokémon fan</b>?? 🤪
      </h4>
      <h4 id="bonus-last-line">Thanks for stopping by! ❤️</h4>
    </div>
  );
}

export default Bonus;
