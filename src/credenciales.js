// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyBEjTI99oECgpbGgqtvyphm6FBCZiOCI",
  authDomain: "login-cofee.firebaseapp.com",
  projectId: "login-cofee",
  storageBucket: "login-cofee.firebasestorage.app",
  messagingSenderId: "976735169113",
  appId: "1:976735169113:web:f6727694e811fb38b91f48"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;