import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "chat-828f1.firebaseapp.com",
  projectId: "chat-828f1",
  storageBucket: "chat-828f1.appspot.com",
  messagingSenderId: "347911488269",
  appId: "1:347911488269:web:4d51b353218adc91192644",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
