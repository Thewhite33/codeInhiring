// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDWx4FPsNIJRudPAHnLeFiy6qXH9kU3zGA",
    authDomain: "hiring-page-5f53d.firebaseapp.com",
    projectId: "hiring-page-5f53d",
    storageBucket: "hiring-page-5f53d.appspot.com",
    messagingSenderId: "346943121167",
    appId: "1:346943121167:web:68d42307917e519c23807a",
    measurementId: "G-CKPX5SRHGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const applyRef = collection(db,"applications")