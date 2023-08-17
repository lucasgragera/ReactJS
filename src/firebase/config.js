
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDfT8jIRT35wuu_39ku-YkuW9ws-Rqyuik",
  authDomain: "venderprodgym.firebaseapp.com",
  projectId: "venderprodgym",
  storageBucket: "venderprodgym.appspot.com",
  messagingSenderId: "145483832732",
  appId: "1:145483832732:web:03c06de1d17469b4583c59"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app