// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7d6c9.firebaseapp.com",
  projectId: "mern-estate-7d6c9",
  storageBucket: "mern-estate-7d6c9.appspot.com",
  messagingSenderId: "1044737651097",
  appId: "1:1044737651097:web:d186b2d452cae5db932308"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);