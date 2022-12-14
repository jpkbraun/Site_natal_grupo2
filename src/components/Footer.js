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
        Termos de Uso | Politica de Privacidade | Política de Cookies
      </small>
    </div>
  );
}

export default Footer;
