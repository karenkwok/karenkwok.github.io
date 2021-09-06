import "./Bonus.scss";
import { Link } from "react-router-dom";

function Bonus() {
  return (
    <div id="bonus-section">
      <h2>A little bit more about me...</h2>
      <h4 className="no-margin-bottom">
        I'm also an <span className="text-bold">amateur pianist</span>,{" "}
        <span className="text-bold">book lover</span>, and{" "}
        {/* <Link to="/art"> */}
        <span className="text-bold">retired painter</span>
        {/*add purple-highlight when i finish the art page*/}
        {/* </Link> */}.
      </h4>
      <h4 className="no-margin-bottom yes-margin-top">
        My favourite foods are{" "}
        <Link to="/icecream">
          <span className="text-bold purple-highlight">ice cream</span>
        </Link>
        , <span className="text-bold">sushi</span>, and{" "}
        <a
          href="https://www.popeyeschicken.ca"
          target="_blank"
          rel="noreferrer"
          id="popeyes"
        >
          <span id="chicken" className="text-bold purple-highlight">
            fried chicken
          </span>
        </a>
        .
      </h4>
      <h4 className="no-margin-bottom yes-margin-top">
        I'm currently watching{" "}
        <a
          href="https://www.youtube.com/watch?v=vxGP-dJd-1o"
          target="_blank"
          rel="noreferrer"
          id="friends"
        >
          <span className="text-bold purple-highlight">Friends</span>
        </a>{" "}
        (and it's the funniest thing ever).
      </h4>
      <h4 className="yes-margin-top">
        Sometimes I get a little bit crazy about{" "}
        <span className="text-bold">Pokémon GO</span>... 🤪
      </h4>
      <h4 id="bonus-last-line">Thanks for stopping by! :)</h4>
    </div>
  );
}

export default Bonus;
