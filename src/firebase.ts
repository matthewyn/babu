// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsd_sXWRV7FlL0RxdFbG4iEg4hCuqG2zU",
  authDomain: "iclean-9b491.firebaseapp.com",
  projectId: "iclean-9b491",
  storageBucket: "iclean-9b491.appspot.com",
  messagingSenderId: "139532278827",
  appId: "1:139532278827:web:33b563f5bd0c63914ede6e",
  measurementId: "G-XFL3N9XNB4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth as firebaseAuth };
