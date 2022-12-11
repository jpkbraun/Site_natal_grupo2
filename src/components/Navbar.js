import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Produtos.js";
import "./Sobre.js";
import "./Banner.js";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <AnchorLink offset="100" href="#home" onClick={closeMobileMenu}>
            <img
              src="../images/logo_decor.png"
              alt="Decor"
              className="navbar-logo"
            />
          </AnchorLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <AnchorLink
                offset="100"
                href="#home"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                offset="80"
                href="#produtos"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Produtos
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                offset="80"
                href="#sobre"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sobre
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
