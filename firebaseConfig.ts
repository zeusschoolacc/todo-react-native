// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2r2IQSpLQQEER-Je9bCCN8s-BhOyWMFs",
  authDomain: "todo-708f0.firebaseapp.com",
  projectId: "todo-708f0",
  storageBucket: "todo-708f0.firebasestorage.app",
  messagingSenderId: "471433971621",
  appId: "1:471433971621:web:2eda70df793cc898974a4c",
  measurementId: "G-EPP1B6L4RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);