// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9NaCi7Pz_l4fboGrrH9GZWDriLStlSVE",
  authDomain: "myecom-eb8fd.firebaseapp.com",
  projectId: "myecom-eb8fd",
  storageBucket: "myecom-eb8fd.appspot.com",
  messagingSenderId: "214861533481",
  appId: "1:214861533481:web:7f994c80f02c97c9712738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB,auth }
