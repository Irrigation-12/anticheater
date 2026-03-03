import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function createExam(title, duration) {
  await addDoc(collection(db, "exams"), {
    title,
    durationMinutes: duration,
    released: false,
    createdAt: serverTimestamp()
  });
}

export async function inviteAdmin(email) {
  await addDoc(collection(db, "adminInvites"), {
    email
  });
}