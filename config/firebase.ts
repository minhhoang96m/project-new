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
  apiKey: "AIzaSyAnDfbIqK0kKN8y_MxHbda8bApGO3KZ6wI",
  authDomain: "project-new-c7eb4.firebaseapp.com",
  projectId: "project-new-c7eb4",
  storageBucket: "project-new-c7eb4.appspot.com",
  messagingSenderId: "867796693457",
  appId: "1:867796693457:web:a16a5f1af17d0b828370f0",
  measurementId: "G-BKC9G9Y3CD"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

// const analytics = getAnalytics(app);

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider };
