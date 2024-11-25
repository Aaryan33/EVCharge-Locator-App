// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC1UcH0fdFKffr0Of_kCqDhwHxMIWtWOZE",
  authDomain: "ev-charger-station-edcf5.firebaseapp.com",
  projectId: "ev-charger-station-edcf5",
  storageBucket: "ev-charger-station-edcf5.appspot.com",
  messagingSenderId: "645471886408",
  appId: "1:645471886408:web:80bdad866f6ab705050c7d",
  measurementId: "G-3JPTKWKGKR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
