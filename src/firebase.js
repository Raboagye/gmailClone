import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAC1m_sQB1pvN7WdUHZgzU23VPbBzg2-OY",
    authDomain: "clone-e16b5.firebaseapp.com",
    projectId: "clone-e16b5",
    storageBucket: "clone-e16b5.appspot.com",
    messagingSenderId: "987784054136",
    appId: "1:987784054136:web:256f2fa48f5979584eb48d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }
