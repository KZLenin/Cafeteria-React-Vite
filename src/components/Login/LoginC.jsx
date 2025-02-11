import React, { useState } from "react";

import appFirebase from '../../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const LoginForm = () => {
  const [registrando, setRegistrando] = useState(false);

  const functAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    try {
      if (registrando) {
        const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
        const user = userCredential.user;
        await setDoc(doc(db, "usuarios", user.uid), {
          correo,
          rol: "usuario",
        });
        alert("Usuario registrado exitosamente");
      } else {
        await signInWithEmailAndPassword(auth, correo, contraseña);
        alert("Inicio de sesión exitoso");
      }
    } catch (error) {
      console.error("Error en la autenticación:", error.message);
      alert("Ocurrió un error: " + error.message);
    }
  };

  return (
    <div className="login-background">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg login-card">
          <form onSubmit={functAutenticacion}>
            <h3 className="card-title text-center mb-4">
              {registrando ? "Registrarse" : "Iniciar Sesión"}
            </h3>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control bg-dark text-white border-light"
                id="email"
                placeholder="usuario@ejemplo.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control bg-dark text-white border-light"
                id="password"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-warning w-100">
              {registrando ? "Registrarse" : "Iniciar Sesión"}
            </button>
            <div className="text-center mt-3">
              <small>
                {registrando ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setRegistrando(!registrando);
                  }}
                  className="text-warning"
                >
                  {registrando ? "Inicia sesión" : "Regístrate"}
                </a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
