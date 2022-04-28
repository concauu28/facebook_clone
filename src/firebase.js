// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import { getAuth } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDD2O2mVc2FyhMZaJP0wEbdW4VHo4hccac",
  authDomain: "facebook-clone-f44f2.firebaseapp.com",
  projectId: "facebook-clone-f44f2",
  storageBucket: "facebook-clone-f44f2.appspot.com",
  messagingSenderId: "483675841582",
  appId: "1:483675841582:web:4dbe973d2b22ed8017abbf",
  measurementId: "G-MBP6PXVZXW",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
