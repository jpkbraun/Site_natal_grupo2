import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Produtos.js";
import "./Sobre.js";
import "./Banner.js";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-menu">
          <div className="nav-item">
            <AnchorLink offset="100" href="#home" className="nav-links">
              HOME
            </AnchorLink>
          </div>
          <div className="nav-item">
            <AnchorLink offset="80" href="#produtos" className="nav-links">
              PRODUTOS
            </AnchorLink>
          </div>
          <div className="nav-item">
            <AnchorLink offset="80" href="#sobre" className="nav-links">
              SOBRE
            </AnchorLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
