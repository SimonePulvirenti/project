 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 // Initialize Firebase
 import 'firebase/storage'

  var config = {
    apiKey: "AIzaSyAIz6cvQcxeky7LpDrnTi18K5FhzOmZzj0",
    authDomain: "net-ninja-marioplan-547f2.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-547f2.firebaseio.com",
    projectId: "net-ninja-marioplan-547f2",
    storageBucket: "net-ninja-marioplan-547f2.appspot.com",
    messagingSenderId: "91623520334"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings( { timestampsInSnapshots: true })
const storage = firebase.storage();
  export {
    storage, firebase as default
  }