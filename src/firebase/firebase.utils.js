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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
