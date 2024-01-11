// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY6bxQjrW6BtmksVeFTxQi3Zzos0wrmdE",
  authDomain: "chat-app-181d5.firebaseapp.com",
  projectId: "chat-app-181d5",
  storageBucket: "chat-app-181d5.appspot.com",
  messagingSenderId: "806517855135",
  appId: "1:806517855135:web:10771ef1bdaa896f8163aa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();