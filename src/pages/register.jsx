import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/estilo-login.css";

import appFirebase from "../credenciales";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import RegisterForm from "../components/Register/RegisterC"; // Asegúrate de tener este componente creado
import Reservas from "./reservas";
import AdminPG from "./adminPG";

import FaceRegister from "../components/Register/FaceRegister";

const auth = getAuth(appFirebase);

const Register = ()=> {
  const [usuario, setUsuario] = useState(null);
  const [esAdmin, setEsAdmin] = useState(false);
  const db = getFirestore(appFirebase);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
        const usuarioDoc = await getDoc(doc(db, "usuarios", usuarioFirebase.uid));
        if (usuarioDoc.exists() && usuarioDoc.data().rol === "admin") {
          setEsAdmin(true);
        } else {
          setEsAdmin(false);
        }
        navigate("/");
      } else {
        setUsuario(null);
        setEsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      {usuario ? (
        esAdmin ? <AdminPG correoUsuario={usuario.email} /> : <Reservas correoUsuario={usuario.email} />
      ) : (
        <RegisterForm />
      )}
    </>
  );
};

export default Register;
