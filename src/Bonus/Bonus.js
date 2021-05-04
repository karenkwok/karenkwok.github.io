import "./Bonus.scss";
import { Link } from "react-router-dom";

function Bonus() {
  return (
    <div id="bonus-section">
      <h2>A little bit more about me...</h2>
      <h4 className="no-margin-bottom">
        I'm also an <span className="bonus-bold">amateur pianist</span> 🎹,{" "}
        <span className="bonus-bold">book lover</span> 📚, and{" "}
        <Link to="/art">
          <span className="bonus-bold purple-highlight">retired painter</span> 🎨
        </Link>
        .
      </h4>
      <h4 className="no-margin-bottom yes-margin-top">
        I have a <span className="bonus-bold">pet turtle</span>. We've been together
        for <span className="bonus-bold">10 years</span> now! 🐢
      </h4>
      <h4 className="no-margin-bottom yes-margin-top">
        My favourite foods are <span className="bonus-bold">sushi</span> 🍣,{" "}
        <Link to="/icecream">
          <span className="bonus-bold purple-highlight">ice cream</span> 🍦
        </Link>
        , and{" "}
        <a
          href="https://www.popeyeschicken.ca"
          target="_blank"
          rel="noreferrer"
          id="popeyes"
        >
          <span id="chicken" className="bonus-bold">
            fried chicken
          </span>{" "}
          🍗
        </a>{" "}
        .
      </h4>
      <h4 className="yes-margin-top">
        Did I mention I'm a huuuge <span className="bonus-bold">Pokémon fan</span>??
        🤪
      </h4>
      <h4 id="bonus-last-line">Thanks for stopping by! ❤️</h4>
    </div>
  );
}

export default Bonus;
