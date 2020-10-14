import firebase from "firebase/app";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyB7mP_gF82-2cxHJWfSuw29Eep6J-BSguA",
  authDomain: "react-portfolio-6ccb0.firebaseapp.com",
  databaseURL: "https://react-portfolio-6ccb0.firebaseio.com",
  projectId: "react-portfolio-6ccb0",
  storageBucket: "react-portfolio-6ccb0.appspot.com",
  messagingSenderId: "705596501290",
  appId: "1:705596501290:web:9a30085ca3505bb3128253",
});

const database = firebase.database();

export default database;
