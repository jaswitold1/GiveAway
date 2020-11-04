import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC4PFhoVIkHxSGpcSYQW3jErxXVxIxDLPE",
  authDomain: "oddajrzeczy-6b530.firebaseapp.com",
  databaseURL: "https://oddajrzeczy-6b530.firebaseio.com",
  projectId: "oddajrzeczy-6b530",
  storageBucket: "oddajrzeczy-6b530.appspot.com",
  messagingSenderId: "360087952256",
  appId: "1:360087952256:web:e2d88dbb347bd3e0c4bf65",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.database = app.database();
  }
  newUserEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };
  signInEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };
  signOut = () => this.auth.signOut();
}
export default Firebase;
