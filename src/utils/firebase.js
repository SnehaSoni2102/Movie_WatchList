// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK42g8DJ7Vh_TH2N5Z5XycWmrtWK7XRvQ",
  authDomain: "moviewatchlist-44dc4.firebaseapp.com",
  projectId: "moviewatchlist-44dc4",
  storageBucket: "moviewatchlist-44dc4.appspot.com",
  messagingSenderId: "207552214653",
  appId: "1:207552214653:web:4e5a34a9a8e29f33e86314"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();