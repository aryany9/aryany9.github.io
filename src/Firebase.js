// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import * as firebaseAnalytics from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiGe6lAWi3c0og9h7zEtnjeYXwVfDdnzQ",
  authDomain: "portfolio-1445a.firebaseapp.com",
  projectId: "portfolio-1445a",
  storageBucket: "portfolio-1445a.appspot.com",
  messagingSenderId: "608609719329",
  appId: "1:608609719329:web:13b8b121dc3bc610f6bf60",
  measurementId: "G-286TTL4PBH"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const analytics = firebaseAnalytics.getAnalytics(app);
 