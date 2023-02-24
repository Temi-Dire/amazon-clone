import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZN30qWr5efQOVWS7ZvyKi3pTHU52co9c",
  authDomain: "clone-d0397.firebaseapp.com",
  projectId: "clone-d0397",
  storageBucket: "clone-d0397.appspot.com",
  messagingSenderId: "455304331988",
  appId: "1:455304331988:web:742178d5ca815289c03141",
  measurementId: "G-3KER2KHYSW",
};

// We're going to set up two things
// First we are going to initialize the app
const firebaseApp = initializeApp(firebaseConfig);

// Second we are going to initialize the database
//eslint-disable-next-line
export const auth = getAuth(firebaseApp); // This gives us a variablt that helps us to handle the signing-in and stuffs like that
// connectAuthEmulator = (auth, "http://localhost:5500")

// Next we export it
