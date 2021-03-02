import firebase from 'firebase'
import firestore from 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyDn-0_fForB34usI46kDOdx0yMzWfbCD48",
    authDomain: "real-time-chat-app-a0ff7.firebaseapp.com",
    databaseURL: "https://real-time-chat-app-a0ff7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "real-time-chat-app-a0ff7",
    storageBucket: "real-time-chat-app-a0ff7.appspot.com",
    messagingSenderId: "581105271022",
    appId: "1:581105271022:web:571a8008921ed79000f3ff"
  };
  
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()