import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "../styles/estilo-login.css"; 
import appFirebase  from "../credenciales";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import LoginC from '../components/Login/LoginC'
import Reservas from './reservas'
import AdminPG from "./adminPG";
const auth = getAuth(appFirebase)
const Login = ()=> {

    const[usuario, setUsuario]= useState(null)
    const [esAdmin, setEsAdmin] = useState(false);
    const db = getFirestore(appFirebase);
    const navigate = useNavigate(); // Hook para redirigir

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
        <LoginC />
      )}
      </>
    );
}

export default Login;