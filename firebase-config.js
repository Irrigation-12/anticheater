// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCAlaJ844TEq2gmhCahYIW4zXSjOR7ICNw",
  authDomain: "anticheater-61d91.firebaseapp.com",
  projectId: "anticheater-61d91",
  storageBucket: "anticheater-61d91.firebasestorage.app",
  messagingSenderId: "814294602241",
  appId: "1:814294602241:web:6c5118e9864d7b8cbc6600"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);