// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhLtcwAig4aev64eAbzmt-MG7-AZDZDDQ",
  authDomain: "srh-tech.firebaseapp.com",
  projectId: "srh-tech",
  storageBucket: "srh-tech.appspot.com",
  messagingSenderId: "468123882923",
  appId: "1:468123882923:web:320f197fe12d078362aeee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
