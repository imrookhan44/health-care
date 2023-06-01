import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
 apiKey: "AIzaSyCsO4BWkn_GUxJhSbhf93PBmX2KvEKcOpg",
  authDomain: "healthcare-7909e.firebaseapp.com",
  projectId: "healthcare-7909e",
  storageBucket: "healthcare-7909e.appspot.com",
  messagingSenderId: "1010376615973",
  appId: "1:1010376615973:web:95100d891929f1d66237cc",
  measurementId: "G-M1JV5B97QV"
};

let InitFirebase;
InitFirebase = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const realDB = firebase.database();

export { InitFirebase, firebase as default, auth, db, realDB };
