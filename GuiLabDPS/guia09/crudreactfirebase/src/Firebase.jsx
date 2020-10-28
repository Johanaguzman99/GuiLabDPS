  
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDkzl2wRC2tko5O0MXpy6s980y4B7KlE2s",
    authDomain: "reactdps.firebaseapp.com",
    databaseURL: "https://reactdps.firebaseio.com",
    projectId: "reactdps",
    storageBucket: "reactdps.appspot.com",
    messagingSenderId: "902587413155",
    appId: "1:902587413155:web:2dae9a9f420bc6925b4516",
    measurementId: "G-E0MZQ8E14G"
  };
  const fb =  firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();