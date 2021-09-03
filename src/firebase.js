import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpptbpZyQcTAFG_hXivao8_9DmdILMRY8",
  authDomain: "clone-74257.firebaseapp.com",
  projectId: "clone-74257",
  storageBucket: "clone-74257.appspot.com",
  messagingSenderId: "800492989391",
  appId: "1:800492989391:web:477d921932f266d0d080ba",
  measurementId: "G-ZKHV2KGD2B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
