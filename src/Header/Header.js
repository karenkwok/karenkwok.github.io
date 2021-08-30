import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

function Header() {
  let location = useLocation();
  const goToHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
      });
    }
  };

  return (
    <header>
      <div id="logo" onClick={goToHome}>
        <Link to="/">Kk</Link>
      </div>
      <div id="night-mode-toggle">toggle</div>
    </header>
  );
}

export default Header;
