import React, { useState } from "react";
import appFirebase from '../../credenciales';
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const RegisterForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nombre: "",
    apellido: "",
    telefono: ""
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        correo: form.email,
        nombre: form.nombre,
        apellido: form.apellido,
        telefono: form.telefono,
        rol: "usuario"
      });

      alert("Registro exitoso");
      window.location.href = "/";
    } catch (error) {
      console.error("Error al registrar:", error.message);
      alert("Ocurrió un error: " + error.message);
    }
  };

  return (
    <div className="login-background">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg login-card p-4">
          <form onSubmit={handleRegister}>
            <h3 className="card-title text-center mb-4">Registro</h3>

            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                className="form-control bg-dark text-white border-light"
                placeholder="usuario@ejemplo.com"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                name="password"
                className="form-control bg-dark text-white border-light"
                placeholder="Ingresa tu contraseña"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirmar Contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control bg-dark text-white border-light"
                placeholder="Confirma tu contraseña"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="nombre"
                className="form-control bg-dark text-white border-light"
                placeholder="Tu nombre"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                name="apellido"
                className="form-control bg-dark text-white border-light"
                placeholder="Tu apellido"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Número de Teléfono</label>
              <input
                type="tel"
                name="telefono"
                className="form-control bg-dark text-white border-light"
                placeholder="Ej. 5551234567"
                required
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-warning w-100 mb-2">
              Registrarse
            </button>

            <button
              type="button"
              className="btn btn-secondary w-100 mb-2"
              onClick={() => window.location.href = "/"}
            >
              Regresar
            </button>

            <div className="text-center mt-3">
              <small>
                ¿No tienes cuenta?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/login");
                  }}
                  className="text-warning"
                >
                  Regístrate
                </a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
