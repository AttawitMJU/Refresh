// const firebase = require("firebase");
import firebase from 'firebase/app'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyDGyQobT67Siz8QIDXILS8yGhprkrvWa34",
        authDomain: "realtimerefresh.firebaseapp.com",
        databaseURL: "https://realtimerefresh.firebaseio.com",
        projectId: "realtimerefresh",
        storageBucket: "realtimerefresh.appspot.com",
        messagingSenderId: "924811869570",
        appId: "1:924811869570:web:fdf268b5718f41d3b8a39b"
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()

