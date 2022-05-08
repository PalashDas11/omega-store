// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



// don't working when i using env.local file..

// const firebaseConfig = {
//   apiKey:  process.env.REACT_APP_apiKey,
//   authDomain:  process.env.REACT_APP_authDomain,
//   projectId:  process.env.REACT_APP_projectId,
//   storageBucket:  process.env.REACT_APP_storageBucket,
//   messagingSenderId:  process.env.REACT_APP_messagingSenderId,
//   appId:  process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId

// };
const firebaseConfig = {
  apiKey: "AIzaSyCi-Yt-3X0CNiQ7StmYv9ndv9xkanAl0DY",
  authDomain: "omega-grocery.firebaseapp.com",
  projectId: "omega-grocery",
  storageBucket: "omega-grocery.appspot.com",
  messagingSenderId: "472789098869",
  appId: "1:472789098869:web:6fc44261232b0c6605333c",
  measurementId: "G-XZZ79TRYHE"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
