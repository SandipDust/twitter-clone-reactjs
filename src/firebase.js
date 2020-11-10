import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDn0jsWM1nsdnp6dSiOoqBO9Ir6m2EO1NI",
    authDomain: "twitter-clone-5c1cc.firebaseapp.com",
    databaseURL: "https://twitter-clone-5c1cc.firebaseio.com",
    projectId: "twitter-clone-5c1cc",
    storageBucket: "twitter-clone-5c1cc.appspot.com",
    messagingSenderId: "334800472524",
    appId: "1:334800472524:web:934723958b1e739affb569",
    measurementId: "G-HFD3HH4EMB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth,provider};
  export default db;