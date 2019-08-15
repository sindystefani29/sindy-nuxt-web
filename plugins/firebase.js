import firebase from 'firebase'

let firebaseConfig = {
  apiKey: "<SECRET AREA>",
  authDomain: "<SECRET AREA>",
  databaseURL: "<SECRET AREA>",
  projectId: "<SECRET AREA>",
  storageBucket: "<SECRET AREA>",
  messagingSenderId: "<SECRET AREA>",
  appID: "<SECRET AREA>",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}