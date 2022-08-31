import React from "react";
import logo from "../../assets/logo.png";
import Nav from "../Nav";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav">
        <Nav link="/" title="Accueil" />
        <Nav link="/" title="Profil" />
        <Nav link="/" title="Réglage" />
        <Nav link="/" title="Communauté" />
      </nav>
    </header>
  );
};

export default Header;
