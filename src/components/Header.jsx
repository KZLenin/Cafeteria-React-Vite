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
      window.location.href = "/login"; // Redirige a la página de login
    }
  };
  return (
    <header className="header">
      <div className="menu container">
        <div className="logo">
          <img src={Logo} alt="Logo de la cafetería" />
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/informacion">Información</a></li>
            <li><a href="/menu">Menú</a></li>
            <li><a href="/reservas">Reservas</a></li>
            <button type="button" class="btn btn-outline-light btn-sm" onClick={handleAuth}>
            {usuario ? "Cerrar sesión" : "Login"}</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
