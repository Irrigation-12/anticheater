import { db, auth } from "./firebase-config.js";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function startExam(examId, durationMinutes) {
  const user = auth.currentUser;

  await setDoc(doc(db, "attempts", user.uid + "_" + examId), {
    examId,
    studentId: user.uid,
    startTime: serverTimestamp(),
    durationMinutes,
    status: "in-progress"
  });
}

export async function loadTimer(examId) {
  const user = auth.currentUser;
  const docSnap = await getDoc(doc(db, "attempts", user.uid + "_" + examId));
  const data = docSnap.data();

  const start = data.startTime.toDate();
  const now = new Date();
  const elapsed = (now - start) / 1000;
  const total = data.durationMinutes * 60;

  return Math.max(total - elapsed, 0);
}