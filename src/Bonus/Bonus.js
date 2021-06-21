import "./Bonus.scss";
import { Link } from "react-router-dom";

function Bonus() {
  return (
    <div id="bonus-section">
      <h2>A little bit more about me...</h2>
      <h4 className="no-margin-bottom">
        I'm also an <span className="text-bold">amateur pianist</span> 🎹,{" "}
        <span className="text-bold">book lover</span> 📚, and{" "}
        <Link to="/art">
          <span className="text-bold purple-highlight">retired painter</span> 🎨
        </Link>
        .
      </h4>
      <h4 className="no-margin-bottom yes-margin-top">
        I have a <span className="text-bold">pet turtle</span>. We've been together
        for <span className="text-bold">11 years</span> now! 🐢
      </h4>
      <h4 className="no-margin-bottom yes-margin-top">
        My favourite foods are <span className="text-bold">sushi</span> 🍣,{" "}
        <Link to="/icecream">
          <span className="text-bold purple-highlight">ice cream</span> 🍦
        </Link>
        , and{" "}
        <a
          href="https://www.popeyeschicken.ca"
          target="_blank"
          rel="noreferrer"
          id="popeyes"
        >
          <span id="chicken" className="text-bold">
            fried chicken
          </span>{" "}
          🍗
        </a>{" "}
        .
      </h4>
      <h4 className="yes-margin-top">
        Did I mention I'm a huuuge <span className="text-bold">Pokémon fan</span>??
        🤪
      </h4>
      <h4 id="bonus-last-line">Thanks for stopping by! ❤️</h4>
    </div>
  );
}

export default Bonus;
