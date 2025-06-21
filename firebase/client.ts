// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ4GdtBOYQGoiWWGi8bIRt8HiIK4ZrYAg",
  authDomain: "prepwise-33bdd.firebaseapp.com",
  projectId: "prepwise-33bdd",
  storageBucket: "prepwise-33bdd.firebasestorage.app",
  messagingSenderId: "116080697231",
  appId: "1:116080697231:web:a4e93fa6b9eaa76dfb35fa",
  measurementId: "G-SJ317HNHV0"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);