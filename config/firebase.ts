// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCqFoohCCpUk8DQPqqiDe47RGcdfLxC3A",
  authDomain: "project-new-cc882.firebaseapp.com",
  projectId: "project-new-cc882",
  storageBucket: "project-new-cc882.appspot.com",
  messagingSenderId: "844998062583",
  appId: "1:844998062583:web:6c97e3fdc88d9c8459bef2",
  measurementId: "G-4MSRV8VZGP"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

// const analytics = getAnalytics(app);

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider };
