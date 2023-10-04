// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJVIVZPd1U7kkXm1jMi3mzEo-k3ISI8-M",
  authDomain: "news-auth-e9948.firebaseapp.com",
  projectId: "news-auth-e9948",
  storageBucket: "news-auth-e9948.appspot.com",
  messagingSenderId: "833415793910",
  appId: "1:833415793910:web:1dc83280d80689d0f670d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;