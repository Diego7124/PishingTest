// firebaseconfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"; 
const firebaseConfig = {
  apiKey: "AIzaSyATumbII5096oH9pr_6TIAnqdwt12c3Soc",
  authDomain: "pishingdb.firebaseapp.com",
  projectId: "pishingdb",
  storageBucket: "pishingdb.firebasestorage.app",
  messagingSenderId: "73295143824",
  appId: "1:73295143824:web:c5061173f7a2c967d30915",
  databaseURL: "https://pishingdb-default-rtdb.firebaseio.com/" 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);

export { db, auth, rtdb };
