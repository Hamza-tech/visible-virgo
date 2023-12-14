import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJshg07q5iszuJgZkW-is_8EJ6LZp6FzM",
  authDomain: "astro-chat-app-cfa5d.firebaseapp.com",
  projectId: "astro-chat-app-cfa5d",
  storageBucket: "astro-chat-app-cfa5d.appspot.com",
  messagingSenderId: "58375535059",
  appId: "1:58375535059:web:81f96d8beefd168cab5726",
  measurementId: "G-YNNL1JKMPD"
};

export const app = initializeApp(firebaseConfig);