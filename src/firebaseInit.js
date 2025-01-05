// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWZIDP8Fmzn61DKrhPs_QV06sOYvEUXMw",
  authDomain: "expensetracker-66cb7.firebaseapp.com",
  projectId: "expensetracker-66cb7",
  storageBucket: "expensetracker-66cb7.firebasestorage.app",
  messagingSenderId: "943115730691",
  appId: "1:943115730691:web:5addc66c8ab9bd922e3336",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
