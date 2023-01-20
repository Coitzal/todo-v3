import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWmrXTh1TXdxxjUoqYoJC_M5yxwySomKs",
  authDomain: "todo-v3-999fc.firebaseapp.com",
  projectId: "todo-v3-999fc",
  storageBucket: "todo-v3-999fc.appspot.com",
  messagingSenderId: "677817118062",
  appId: "1:677817118062:web:ffbcadd405099fabdda57f",
  measurementId: "G-NMQKXCPJD1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };