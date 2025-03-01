// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWrpy7sb-T4FnM9gktBG-0A_WUH6CiH_w",
  authDomain: "anas-bn-malik-islamic-centre.firebaseapp.com",
  projectId: "anas-bn-malik-islamic-centre",
  storageBucket: "anas-bn-malik-islamic-centre.firebasestorage.app",
  messagingSenderId: "967542642319",
  appId: "1:967542642319:web:9b7ddd70d5841eacb402fa",
  measurementId: "G-N5KGLRDBGT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
// const auth = getAuth(app);
export const db = getFirestore(app);

export { db, collection, addDoc, getDocs };

// const app = initializeApp(firebaseConfig);

// Initialize Firestore (database)
// const db = getFirestore(app);

// Initialize Authentication
// const auth = getAuth(app);
