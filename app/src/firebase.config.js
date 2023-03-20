import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQdjX98SyWmLpXl02rHsOrjCwXdMhCyec",
    authDomain: "notes-4e485.firebaseapp.com",
    projectId: "notes-4e485",
    storageBucket: "notes-4e485.appspot.com",
    messagingSenderId: "715745537576",
    appId: "1:715745537576:web:1aab19dce1bb478d1a4f1d",
    measurementId: "G-LFPZ59NRX6"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export default db;