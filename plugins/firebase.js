import firebase from 'firebase'

let firebaseConfig = {
  apiKey: "AIzaSyAdqS68LeShBYVTkEq2yKXh1NCbiox56kE",
  authDomain: "trial-firebase-fa6e9.firebaseapp.com",
  databaseURL: "https://trial-firebase-fa6e9.firebaseio.com",
  projectId: "trial-firebase-fa6e9",
  storageBucket: "gs://trial-firebase-fa6e9.appspot.com",
  messagingSenderId: "703623261743",
  appID: "1:703623261743:web:9f0e73efeceea5e0",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.database()