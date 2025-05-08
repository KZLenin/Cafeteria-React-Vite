import React, { useState, useRef, useEffect } from "react";
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
import { detectFace } from "../../utils/faceplusplus";

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

  const [base64Image, setBase64Image] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Activar cámara al montar componente
  useEffect(() => {
    let streamRef;
  
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        streamRef = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => {
        alert("No se pudo acceder a la cámara: " + err.message);
      });
  
    // Al desmontar, detener la cámara
    return () => {
      if (streamRef) {
        streamRef.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/jpeg").split(",")[1];
    setBase64Image(imageData);
    alert("Foto capturada correctamente");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!base64Image) {
      alert("Por favor, captura una foto de tu rostro.");
      return;
    }

    try {
      // Detectar rostro y obtener token
      const faceToken = await detectFace(base64Image);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;

      // Guardar en Firestore
      await setDoc(doc(db, "usuarios", user.uid), {
        correo: form.email,
        nombre: form.nombre,
        apellido: form.apellido,
        telefono: form.telefono,
        rol: "usuario",
        face_token: faceToken
      });

      alert("Registro exitoso con rostro");
      navigate("/");
    } catch (error) {
      console.error("Error al registrar:", error.message);
      alert("Error: " + error.message);
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

            {/* Sección para capturar rostro */}
            <div className="mb-3">
              <label className="form-label">Captura tu rostro</label>
              <video ref={videoRef} autoPlay className="w-100 rounded mb-2" />
              <button
                type="button"
                className="btn btn-outline-light w-100"
                onClick={capturePhoto}
              >
                Capturar rostro
              </button>
              <canvas ref={canvasRef} style={{ display: "none" }} />
            </div>

            <button type="submit" className="btn btn-outline-warning w-100 mb-2">
              Registrarse
            </button>

            <button
              type="button"
              className="btn btn-secondary w-100 mb-2"
              onClick={() => navigate("/")}
            >
              Regresar
            </button>

            <div className="text-center mt-3">
              <small>
                ¿Ya tienes cuenta?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/login");
                  }}
                  className="text-warning"
                >
                  Inicia sesión
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
