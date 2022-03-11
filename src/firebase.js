import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAozQjaifOcvmU7GSHPjaiRB6NJJE1cahE",
    authDomain: "test-diveboard.firebaseapp.com",
    databaseURL: "https://test-diveboard-default-rtdb.firebaseio.com",
    projectId: "test-diveboard",
    storageBucket: "test-diveboard.appspot.com",
    messagingSenderId: "1011864233483",
    appId: "1:1011864233483:web:cc1a3986da317636fac90e",
    measurementId: "G-6196ESTNC6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;


