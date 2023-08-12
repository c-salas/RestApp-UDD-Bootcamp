// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import  "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqk3URz5c6G-BQ8Tm0-0wqe_2-8lLl-Hk",
  authDomain: "restapp-udd.firebaseapp.com",
  projectId: "restapp-udd",
  storageBucket: "restapp-udd.appspot.com",
  messagingSenderId: "411080942908",
  appId: "1:411080942908:web:0d449a92b22713f53f2a39"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const  db = app.firestore()