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

// firestore
//   .collection("users")
//   .doc("cCWAkUUOe2u1vBxiZvtp")
//   .collection("cartItems")
//   .doc("7JfcTMoRcPC59qqRGwLz");

// firestore.doc("/users/cCWAkUUOe2u1vBxiZvtp/cartItems/7JfcTMoRcPC59qqRGwLz");

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  console.log(snapshot);
  return userRef;
};

export default firebase;
