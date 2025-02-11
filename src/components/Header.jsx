import React from "react";
import "../styles/header.css";
import Logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <header className="header">
      <div className="menu container">
        <div className="logo">
          <img src={Logo} alt="logo cafeteria" />
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/informacion">Información</a></li>
            <li><a href="/menu">Menú</a></li>
            <li><a href="/reservas">Reservas</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;