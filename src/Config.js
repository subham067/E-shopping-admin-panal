import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAIy3SEbcjOQQLmnnMLbErrVXA2KbvEZ1E",
  authDomain: "ecom-project-3ef36.firebaseapp.com",
  projectId: "ecom-project-3ef36",
  storageBucket: "ecom-project-3ef36.appspot.com",
  messagingSenderId: "719507194536",
  appId: "1:719507194536:web:55ae33cab41c8b9ff4b89d",
  measurementId: "G-ETB5JZ4QWQ"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
export const analytics = getFirestore(app);
export const auth = getAuth(app)