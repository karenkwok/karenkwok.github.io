import "./Bonus.scss";
import { Link } from "react-router-dom";

function Bonus() {
  return (
    <div id="bonus-section">
      <h2>A little bit more about me...</h2>
      <h4 className="no-margin-bottom">
        I'm also an amateur pianist, book lover, and{" "}
        {/* <Link to="/art"> */}
        retired painter
        {/*add purple-highlight when i finish the art page*/}
        {/* </Link> */}.
      </h4>
      <h4 className="no-margin-bottom yes-margin-top">
        My favourite foods are{" "}
        <Link to="/icecream">
          <span className="purple-highlight">ice cream</span>
        </Link>
        , sushi, and{" "}
        <a
          href="https://www.popeyeschicken.ca"
          target="_blank"
          rel="noreferrer"
          id="popeyes"
        >
          <span id="chicken">fried chicken</span>
        </a>
        .
      </h4>
      <h4 className="yes-margin-top">Sometimes I play Pokémon GO... 🤪</h4>
      <h4 id="bonus-last-line">Thanks for stopping by! :)</h4>
    </div>
  );
}

export default Bonus;
