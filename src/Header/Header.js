import "./Header.scss";

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <div id="logo" onClick={scrollToTop}>
        Kk
      </div>
      <div id="night-mode-toggle">toggle</div>
    </header>
  );
}

export default Header;
