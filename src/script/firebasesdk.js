// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEJQrmJqbmyP7Lxqa1SUzWqOlFE-YIbaA",
  authDomain: "yt-manager-proj.firebaseapp.com",
  projectId: "yt-manager-proj",
  storageBucket: "yt-manager-proj.appspot.com",
  messagingSenderId: "566798711798",
  appId: "1:566798711798:web:dec9484037ea9e417a65d7",
  measurementId: "G-EDVGL25MSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;
