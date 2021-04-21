import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-ax47mrBazM11nXKWJRFeuo7taJ7Yhts",
  authDomain: "pokianface.firebaseapp.com",
  projectId: "pokianface",
  storageBucket: "pokianface.appspot.com",
  messagingSenderId: "519129419977",
  appId: "1:519129419977:web:cf5289a560f3ffbc3cfd18",
  measurementId: "G-GYB5PH1E3F",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
