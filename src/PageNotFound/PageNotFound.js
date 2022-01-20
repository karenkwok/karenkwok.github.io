import "./PageNotFound.scss";
import psyduck from "./psyduck.png";

function PageNotFound() {
  return (
    <div id="pagenotfound-section">
      <h4>Oops!</h4>
      <h4>That page does not exist.</h4>
      <p>Click the Kk at the top left to go back to the main page.</p>
      <img src={psyduck} alt="Psyduck"></img>
      <p>Oh, you're still here. Well.. This is awkward...</p>
    </div>
  );
}

export default PageNotFound;
