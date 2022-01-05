import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8m85T3jLQP4NoSlOG_ZDws3UjjrxFS8Y",
  authDomain: "learning-api-projects.firebaseapp.com",
  projectId: "learning-api-projects",
  storageBucket: "learning-api-projects.appspot.com",
  messagingSenderId: "34757188674",
  appId: "1:34757188674:web:e1bb3ae84879ae7c6ae1db",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };