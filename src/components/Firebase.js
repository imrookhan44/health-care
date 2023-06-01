import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
 apiKey: "AIzaSyCq_X_B3m5Ld0xq9NxILylJAG1mQJdu8O8",
  authDomain: "salloon-4e686.firebaseapp.com",
  projectId: "salloon-4e686",
  storageBucket: "salloon-4e686.appspot.com",
  messagingSenderId: "123630027967",
  appId: "1:123630027967:web:c6e00dcf36590a7c51f20a"
};

let InitFirebase;
InitFirebase = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const realDB = firebase.database();

export { InitFirebase, firebase as default, auth, db, realDB };
