// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    updateProfile
 } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdekmrMxjmaq1uRyOmybOuD2VHFx326vw",
  authDomain: "moviewebsite-d365f.firebaseapp.com",
  projectId: "moviewebsite-d365f",
  storageBucket: "moviewebsite-d365f.firebasestorage.app",
  messagingSenderId: "786632434434",
  appId: "1:786632434434:web:78ee13fcbbc765f702181b",
  measurementId: "G-5M4F9X3WJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
export { auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  updateProfile};
export const googleProvider = new GoogleAuthProvider();