import React from "react";
import "./Footer.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <AnchorLink offset="100" href="#home">
        <img src="images/logo_decor.png" alt="Decor" className="social-logo" />
      </AnchorLink>
      <div className="realizacao">
        <small>Realização:</small>
        <Link to={{ pathname: "https://instagram.com/ide_jr" }} target="_blank">
          <img src="images/logo_ide.png" alt="IDE" className="logo-ide" />
        </Link>
      </div>
      <small class="cookies-text">
        <p>Termos de Uso</p> | <p>Politica de Privacidade</p> | <p>Política de Cookies</p>
      </small>
    </div>
  );
}

export default Footer;
