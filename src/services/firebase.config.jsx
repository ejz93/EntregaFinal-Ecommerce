// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsv6TRRRQ74q5VUJBt8sOhgkbHfq_83EU",
  authDomain: "e-commerce-elemental.firebaseapp.com",
  projectId: "e-commerce-elemental",
  storageBucket: "e-commerce-elemental.appspot.com",
  messagingSenderId: "968543186736",
  appId: "1:968543186736:web:f568f0a654192d0654a2f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)