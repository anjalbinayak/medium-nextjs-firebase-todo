import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClH1YdssQHAA0peMtQ_wj2A4Crnc4fEgU",
  authDomain: "medium-firebase-next-todo.firebaseapp.com",
  projectId: "medium-firebase-next-todo",
  storageBucket: "medium-firebase-next-todo.appspot.com",
  messagingSenderId: "989711683222",
  appId: "1:989711683222:web:bc878dca5a5d251177fcb7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
