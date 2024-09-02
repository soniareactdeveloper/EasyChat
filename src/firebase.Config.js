// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtgWdivtswC4NnspPur0uoePk3UPARlYs",
  authDomain: "easy-92978.firebaseapp.com",
  projectId: "easy-92978",
  storageBucket: "easy-92978.appspot.com",
  messagingSenderId: "1722318548",
  appId: "1:1722318548:web:cc5a848d9353dd7bd50541",
  measurementId: "G-N31QSLNQLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };
