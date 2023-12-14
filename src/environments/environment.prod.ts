// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBJshg07q5iszuJgZkW-is_8EJ6LZp6FzM",
  authDomain: "astro-chat-app-cfa5d.firebaseapp.com",
  projectId: "astro-chat-app-cfa5d",
  storageBucket: "astro-chat-app-cfa5d.appspot.com",
  messagingSenderId: "58375535059",
  appId: "1:58375535059:web:81f96d8beefd168cab5726",
  measurementId: "G-YNNL1JKMPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);