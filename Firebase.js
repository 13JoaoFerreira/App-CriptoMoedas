import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyAoEsVUl67NzJuMtXtloMs9wSEmgpg8BW8",
  authDomain: "appcripto-9ae8c.firebaseapp.com",
  projectId: "appcripto-9ae8c",
  storageBucket: "appcripto-9ae8c.appspot.com",
  messagingSenderId: "699259460910",
  appId: "1:699259460910:web:4d6a06e8e7e3c036b8eebf"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);