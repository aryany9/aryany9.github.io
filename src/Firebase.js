// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import * as firebaseAnalytics from "firebase/analytics";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: '${{ secrets.FIREBASE_APIKEY }}',
    authDomain: '${{ secrets.FIREBASE_AUTHDOMAIN }}',
    projectId: '${{ secrets.FIREBASE_PROJECTID }}',
    storageBucket: '${{ secrets.FIREBASE_STORAGEBUCKET }}',
    messagingSenderId: '${{ secrets.FIREBASE_MESSAGINGSENDERID }}',
    appId: '${{ secrets.FIREBASE_APPID }}',
    measurementId: '${{ secrets.FIREBASE_MEASUREMENTID }}'
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const analytics = firebaseAnalytics.getAnalytics(app);
export const firestore = firebase.firestore();
