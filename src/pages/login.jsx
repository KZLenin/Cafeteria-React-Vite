import appFirebase  from "../credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase)

import LoginC from '../components/Login/LoginC'
import Reservas from './reservas'

import { useState } from "react";
const Login = ()=> {

    const[usuario, setUsuario]= useState(null)

    onAuthStateChanged(auth, (usuarioFirebase)=>{
      if(usuarioFirebase){
        setUsuario(usuarioFirebase)
      } else{
        setUsuario(null)
      }
    })

  return (
      <>
      {usuario ? <Reservas correoUsuario = {usuario.email} /> : <LoginC/>}
      </>
    );
}

export default Login;