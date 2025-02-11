import { useState, useEffect } from "react";
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
    const db = getFirestore(appFirebase);

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
      } else {
        setUsuario(null);
        setEsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);


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