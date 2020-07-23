import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCOIgi4HUllOu9RCrOszc-K3iEwVSRFOus",
  authDomain: "e-commerce-ac2ef.firebaseapp.com",
  databaseURL: "https://e-commerce-ac2ef.firebaseio.com",
  projectId: "e-commerce-ac2ef",
  storageBucket: "e-commerce-ac2ef.appspot.com",
  messagingSenderId: "450582164230",
  appId: "1:450582164230:web:b02579a90c0bfdcee7a487",
  measurementId: "G-JTMLL3P49F",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log("error creating doc", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
