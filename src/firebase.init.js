// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMvvLb7iOep1OmYRxOitfSzYrZOgC-b2A",
  authDomain: "ema-jon-website-7e8db.firebaseapp.com",
  projectId: "ema-jon-website-7e8db",
  storageBucket: "ema-jon-website-7e8db.appspot.com",
  messagingSenderId: "481322079813",
  appId: "1:481322079813:web:f6c6beeff822ed37d0b52c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;