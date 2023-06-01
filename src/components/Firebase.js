import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
 apiKey: "AIzaSyC9uXGXt1lrBQCEUIJBdql96aDbxP19ub4",
  authDomain: "health-e5791.firebaseapp.com",
  projectId: "health-e5791",
  storageBucket: "health-e5791.appspot.com",
  messagingSenderId: "472167689269",
  appId: "1:472167689269:web:aa5a42f3af021e41fb957c",
  measurementId: "G-MRJ70RJE54"
};

let InitFirebase;
InitFirebase = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const realDB = firebase.database();

export { InitFirebase, firebase as default, auth, db, realDB };
