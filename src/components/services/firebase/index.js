// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAv8Y0q3XoiuvtNRrLXbi1JIOSDB-tJsZA",
  authDomain: "basket-store.firebaseapp.com",
  projectId: "basket-store",
  storageBucket: "basket-store.appspot.com",
  messagingSenderId: "7774771918",
  appId: "1:7774771918:web:ca67683fe5808e42cb0e9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
