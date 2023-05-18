import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZpOuplbKrLEBQ_mx1jWa2rkAkghy2fU8",
  authDomain: "adoteme-2879b.firebaseapp.com",
  projectId: "adoteme-2879b",
  storageBucket: "adoteme-2879b.appspot.com",
  messagingSenderId: "724639172469",
  appId: "1:724639172469:web:2d73a898d1a0ff3a08353c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);