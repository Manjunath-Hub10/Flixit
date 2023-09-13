import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFmV4fcaUrvE30N2tkM45xq-QSxWn5AuA",
  authDomain: "react-vite-flixit.firebaseapp.com",
  projectId: "react-vite-flixit",
  storageBucket: "react-vite-flixit.appspot.com",
  messagingSenderId: "718771021617",
  appId: "1:718771021617:web:8a70dfc5a1be2133083210",
  measurementId: "G-07W0DRBGW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);