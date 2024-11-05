// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLi28HuqE5oh3dZ4VYADBExpiZPatdiRs",
  authDomain: "parctice-demo.firebaseapp.com",
  projectId: "parctice-demo",
  storageBucket: "parctice-demo.firebasestorage.app",
  messagingSenderId: "770774878093",
  appId: "1:770774878093:web:d82db6d2a86ab10114dfc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;