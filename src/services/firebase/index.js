// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfRimw-zCg11TYFvtKISWUw5Hk1FwqPmw",
  authDomain: "munayka-ce904.firebaseapp.com",
  projectId: "munayka-ce904",
  storageBucket: "munayka-ce904.appspot.com",
  messagingSenderId: "745796202923",
  appId: "1:745796202923:web:5261125c04c4b1590562ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)
