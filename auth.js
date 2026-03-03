import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function register(email, password) {
  const inviteQuery = query(collection(db, "adminInvites"), where("email", "==", email));
  const inviteSnapshot = await getDocs(inviteQuery);

  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  let role = "student";

  if (!inviteSnapshot.empty) {
    role = "admin";
  }

  await setDoc(doc(db, "users", user.uid), {
    email,
    role
  });
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function checkAuth(callback) {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      window.location.href = "index.html";
      return;
    }

    const userDoc = await getDoc(doc(db, "users", user.uid));
    callback(userDoc.data());
  });
}