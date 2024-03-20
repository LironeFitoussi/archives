import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCInvXV99sI4c9CUo2OZ53QDjYzK07ifvw",
    authDomain: "learn--cloud.firebaseapp.com",
    projectId: "learn--cloud",
    storageBucket: "learn--cloud.appspot.com",
    messagingSenderId: "727835268479",
    appId: "1:727835268479:web:e798b5594e7e20ac57b64a"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)