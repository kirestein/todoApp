// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9oqNSfVsRJAYnAALK5QH-xfZ6jxZYd6U",
  authDomain: "udemy-2f1f7.firebaseapp.com",
  projectId: "udemy-2f1f7",
  storageBucket: "udemy-2f1f7.appspot.com",
  messagingSenderId: "1022162406741",
  appId: "1:1022162406741:web:43d7e86c0079b15dd0b3dc",
  measurementId: "G-WGFHSTZJWS"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export  { db, auth };