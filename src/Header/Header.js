import "./Header.scss";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MoonIcon, SunIcon } from "@primer/octicons-react";

function Header() {
  const [switchToggle, setSwitchToggle] = React.useState(
    <MoonIcon size={24} />
  );
  const [numToggle, setNumToggle] = React.useState(true);

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
  const switchDayNightToggle = () => {
    if (numToggle === true) {
      setSwitchToggle(<SunIcon size={24} />);
      setNumToggle(false);
      document.body.classList.add("dark");
    } else {
      setSwitchToggle(<MoonIcon size={24} />);
      setNumToggle(true);
      document.body.classList.remove("dark");
    }
  };

  return (
    <header>
      <div id="logo" onClick={goToHome}>
        <Link to="/">Kk</Link>
      </div>
      <div id="toggle" onClick={switchDayNightToggle}>{switchToggle}</div>
    </header>
  );
}

export default Header;
