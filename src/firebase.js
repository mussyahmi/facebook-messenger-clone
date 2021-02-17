import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbSQ7Pt2b7Ctv4r0S_15YhpfBo_9pSnc8",
  authDomain: "facebook-messenger-clone-dec01.firebaseapp.com",
  projectId: "facebook-messenger-clone-dec01",
  storageBucket: "facebook-messenger-clone-dec01.appspot.com",
  messagingSenderId: "339979490118",
  appId: "1:339979490118:web:709bbcd4ffb1296bbfcb47",
  measurementId: "G-8BEGK37HKR",
});

const db = firebaseApp.firestore();

export default db;
