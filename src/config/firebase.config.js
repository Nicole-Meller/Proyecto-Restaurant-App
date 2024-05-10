
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAmF0cf3agoOU4z0y7Kti0rAgv_UQYqx2I",
  authDomain: "menu-ebd72.firebaseapp.com",
  projectId: "menu-ebd72",
  storageBucket: "menu-ebd72.appspot.com",
  messagingSenderId: "816431591944",
  appId: "1:816431591944:web:28f3aaeaf91e06c70197bd"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)