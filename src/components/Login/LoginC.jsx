import React, { useState, useRef, useEffect } from "react";
import appFirebase from '../../credenciales';
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { detectFace, compareFaces } from "../../utils/faceplusplus";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const LoginForm = () => {
  const [base64Image, setBase64Image] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const CONFIDENCE_THRESHOLD = 85;

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

    // Limpiar stream de cámara al desmontar
    return () => {
      if (streamRef) {
        streamRef.getTracks().forEach(track => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
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

  const handleLogin = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const password = e.target.password.value;

    if (!correo || !password) {
      alert("Por favor ingresa correo y contraseña.");
      return;
    }

    if (!base64Image) {
      alert("Por favor, captura tu rostro para continuar.");
      return;
    }

    try {
      // Obtener UID del usuario por su correo
      const loginUser = await signInWithEmailAndPassword(auth, correo, password);
      const user = loginUser.user;

      const userDoc = await getDoc(doc(db, "usuarios", user.uid));
      if (!userDoc.exists()) {
        throw new Error("Usuario no registrado correctamente.");
      }

      const storedFaceToken = userDoc.data().face_token;
      if (!storedFaceToken) {
        throw new Error("Este usuario no tiene un rostro registrado.");
      }

      // Detectar rostro actual
      const currentFaceToken = await detectFace(base64Image);

      if (!currentFaceToken) {
        alert("No se detectó ningún rostro en la imagen. Intenta nuevamente.");
        await auth.signOut(); // Aseguramos que no quede la sesión activa
        return;
      }

      // Comparar rostros
      const confidence = await compareFaces(storedFaceToken, base64Image);

      if (confidence !== null && confidence >= CONFIDENCE_THRESHOLD) {
        alert(`Autenticación facial exitosa. Confianza: ${confidence.toFixed(2)}%`);
        navigate("/");
      } else {
        await auth.signOut(); // Cerrar sesión si no coincide
        alert(`El rostro no coincide (Confianza: ${confidence?.toFixed(2) || 0}%). Intenta nuevamente.`);
      }

    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="login-background">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg login-card p-4">
          <form onSubmit={handleLogin}>
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
              className="btn btn-outline-warning w-100 mb-2"
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

