// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZNXQmy6l0DXuqA4_2-ejvgeifkqNOqnY",
  authDomain: "kfc-project-1292f.firebaseapp.com",
  projectId: "kfc-project-1292f",
  storageBucket: "kfc-project-1292f.appspot.com",
  messagingSenderId: "107513396962",
  appId: "1:107513396962:web:a945189d9c69fbb1eb68bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
