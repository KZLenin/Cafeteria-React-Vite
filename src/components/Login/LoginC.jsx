import React, { useState, useRef, useEffect } from "react";
import appFirebase from '../../credenciales';
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { compareFaces } from "../../utils/faceplusplus";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const LoginForm = () => {
  const [base64Image, setBase64Image] = useState(null);
  const [registrando, setRegistrando] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => {
        alert("No se pudo acceder a la cámara: " + err.message);
      });
  }, []);

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

  const functAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, correo, contraseña);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "usuarios", user.uid));
      if (!userDoc.exists()) throw new Error("Usuario no registrado en la base de datos");

      const userData = userDoc.data();

      if (!userData.face_token) {
        alert("Este usuario no tiene rostro registrado. Contacta con soporte.");
        return;
      }

      if (!base64Image) {
        alert("Captura una foto para la verificación facial.");
        return;
      }

      const confidence = await compareFaces(userData.face_token, base64Image);
      console.log("Confidence:", confidence);

      if (confidence >= 85) {
        alert("Acceso concedido. Bienvenido.");
        navigate("/");
      } else {
        alert("La verificación facial falló. Inténtalo de nuevo.");
        auth.signOut(); // cerrar sesión por seguridad
      }

    } catch (error) {
      console.error("Error en la autenticación:", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="login-background">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg login-card p-4">
          <form onSubmit={functAutenticacion}>
            <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control bg-dark text-white border-light"
                id="email"
                placeholder="usuario@ejemplo.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control bg-dark text-white border-light"
                id="password"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>

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
              Iniciar Sesión
            </button>

            <button
              type="button"
              className="btn btn-secondary w-100"
              onClick={() => navigate("/")}
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
                    navigate("/register");
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

export default LoginForm;

