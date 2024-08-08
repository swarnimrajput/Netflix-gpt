// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg8v-LCQW2iyw22pXvne1VVWcdZ1stb1E",
  authDomain: "netflix-gpt-ea796.firebaseapp.com",
  projectId: "netflix-gpt-ea796",
  storageBucket: "netflix-gpt-ea796.appspot.com",
  messagingSenderId: "531071265170",
  appId: "1:531071265170:web:6deee4dd0003894f74b94b",
  measurementId: "G-GB5MGC6PB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();