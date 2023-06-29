// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCuxtC4OAdT_wzrvKYB4kkbv0_nUwo_3Oo",
  authDomain: "aychatapp.firebaseapp.com",
  projectId: "aychatapp",
  storageBucket: "aychatapp.appspot.com",
  messagingSenderId: "78957810253",
  appId: "1:78957810253:web:d11b01600a0c451d8f0204",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);