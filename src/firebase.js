// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBydZ6cHURGsMZ1IYUHgHMz66X9pL4sJiw",
  authDomain: "agrosmart-c4a2d.firebaseapp.com",
  databaseURL: "https://agrosmart-c4a2d-default-rtdb.firebaseio.com",
  projectId: "agrosmart-c4a2d",
  storageBucket: "agrosmart-c4a2d.firebasestorage.app",
  messagingSenderId: "1071735729842",
  appId: "1:1071735729842:web:07449f44051deedb5c23ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore & Export them
export const auth = getAuth(app);
export const db = getFirestore(app);