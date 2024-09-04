import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADcpl7Qsjz4aw1aXWxTAZ48CaUpO3x8nU",
    authDomain: "portfolio-e08ce.firebaseapp.com",
    projectId: "portfolio-e08ce",
    storageBucket: "portfolio-e08ce.appspot.com",
    messagingSenderId: "612112834610",
    appId: "1:612112834610:web:1836b9ca916bec6d58dc2b",
    measurementId: "G-2E816H2QB3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };