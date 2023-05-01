// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAELvBQ0bUWoX7RLx4VEAeKWOOisc3G1e8",
  authDomain: "the-chef-recipe-client.firebaseapp.com",
  projectId: "the-chef-recipe-client",
  storageBucket: "the-chef-recipe-client.appspot.com",
  messagingSenderId: "437039333161",
  appId: "1:437039333161:web:b15a29dce94d4951d40138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;