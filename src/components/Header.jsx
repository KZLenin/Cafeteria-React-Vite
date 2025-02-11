import React, { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import appFirebase from "../credenciales";
import "../styles/header.css";
import Logo from "../assets/logo.ico";

const auth = getAuth(appFirebase);

const Header = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });
    return () => unsubscribe();
  }, []);

  const handleAuth = () => {
    if (usuario) {
      signOut(auth);
    } else {
      window.location.href = "/login"; // Redirige a la página de login
    }
  };

  return (
    <header className="header bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="logo cafeteria" className="logo" />
          </a>

          {/* Botón de menú responsivo (sandwich) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuNavbar"
            aria-controls="menuNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenido del menú */}
          <div className="collapse navbar-collapse" id="menuNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/informacion">Información</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/menu">Menú</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/reservas">Reservas</a>
              </li>
              {/* Botón Login / Cerrar Sesión */}
              <li className="nav-item">
                <button className="btn btn-outline-warning ms-3" onClick={handleAuth}>
                  {usuario ? "Cerrar sesión" : "Login"}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
