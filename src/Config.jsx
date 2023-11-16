import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from './firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAXXVCYOuNH7MOwRqprTmT4cUKfREsT9c0",
  authDomain: "keep-clone-d7276.firebaseapp.com",
  projectId: "keep-clone-d7276",
  storageBucket: "keep-clone-d7276.appspot.com",
  messagingSenderId: "807917187140",
  appId: "1:807917187140:web:5d2c1b48b26a8a81f80c11",
  measurementId: "G-9KXXB4FVCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };