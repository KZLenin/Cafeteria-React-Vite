import React, { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import appFirebase from "../credenciales";
import "../styles/header.css";
import Logo from "../assets/Held Coffee Shop Logo.png";

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
      window.location.href = "/login";
    }
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand logo" href="/">
            <img src={Logo} alt="Logo de la cafetería" />
          </a>

          {/* Botón Hamburguesa */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú */}
          <div className="collapse navbar-collapse" id="navbarNav">
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
              <li className="nav-item">
                <button className="btn btn-auth" onClick={handleAuth}>
                  {usuario ? "Cerrar sesión" : "Login"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
