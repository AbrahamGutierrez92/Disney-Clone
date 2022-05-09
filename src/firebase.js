import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBFiPmoik5ehc0D2gjtC4APS46doZQCU5k",
  authDomain: "abrahamgutierrez92.github.io/Disney-Clone",
  projectId: "disney-clone2021",
  storageBucket: "abrahamgutierrez92.github.io/Disney-Clone",
  messagingSenderId: "363416162078",
  appId: "1:363416162078:web:1ac5ef511fd8da17a5030f"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;