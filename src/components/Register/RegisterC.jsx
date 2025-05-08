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
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

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

    return () => {
      if (streamRef) {
        streamRef.getTracks().forEach(track => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
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
      setLoading(true);

      const faceToken = await detectFace(base64Image);

      if (!faceToken) {
        alert("No se detectó ningún rostro. Intenta nuevamente con buena iluminación.");
        setLoading(false);
        return;
      }

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
        rol: "usuario",
        face_token: faceToken
      });

      alert("Registro exitoso con rostro");
      navigate("/");
    } catch (error) {
      console.error("Error al registrar:", error.message);
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-background">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg login-card p-4">
          <form onSubmit={handleRegister}>
            <h3 className="card-title text-center mb-4">Registro</h3>

            {/* Campos del formulario */}
            {["email", "password", "confirmPassword", "nombre", "apellido", "telefono"].map((field, index) => (
              <div className="mb-3" key={index}>
                <label className="form-label">
                  {field === "email" ? "Correo Electrónico" :
                   field === "password" ? "Contraseña" :
                   field === "confirmPassword" ? "Confirmar Contraseña" :
                   field === "nombre" ? "Nombre" :
                   field === "apellido" ? "Apellido" :
                   "Número de Teléfono"}
                </label>
                <input
                  type={field.includes("password") ? "password" : field === "email" ? "email" : field === "telefono" ? "tel" : "text"}
                  name={field}
                  className="form-control bg-dark text-white border-light"
                  placeholder={
                    field === "email" ? "usuario@ejemplo.com" :
                    field === "password" ? "Ingresa tu contraseña" :
                    field === "confirmPassword" ? "Confirma tu contraseña" :
                    field === "telefono" ? "Ej. 5551234567" :
                    `Tu ${field}`
                  }
                  required
                  onChange={handleChange}
                />
              </div>
            ))}

            {/* Captura de rostro */}
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
              {base64Image && (
                <div className="mt-2 text-center">
                  <img
                    src={`data:image/jpeg;base64,${base64Image}`}
                    alt="Rostro capturado"
                    style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                  />
                  <p className="text-white">Rostro capturado</p>
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-outline-warning w-100 mb-2" disabled={loading}>
              {loading ? "Registrando..." : "Registrarse"}
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

