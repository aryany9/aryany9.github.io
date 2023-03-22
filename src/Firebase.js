// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import * as firebaseAnalytics from "firebase/analytics";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID
};


console.log(process.env.FIREBASE_APIKEY)
console.log(process.env.FIREBASE_AUTHDOMAIN)
console.log(process.env.FIREBASE_PROJECTID)
console.log(process.env.FIREBASE_STORAGEBUCKET)
console.log(process.env.FIREBASE_MESSAGINGSENDERID)
console.log(process.env.FIREBASE_APPID)
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const analytics = firebaseAnalytics.getAnalytics(app);
export const firestore = firebase.firestore();
