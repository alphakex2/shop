import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyB8gFpTEgd11J3Xpdk6_umc6nLwb4ojBdw",
    authDomain: "ken-shop.firebaseapp.com",
    databaseURL: "https://ken-shop.firebaseio.com",
    projectId: "ken-shop",
    storageBucket: "ken-shop.appspot.com",
    messagingSenderId: "425714795633",
    appId: "1:425714795633:web:c58a414c32b154000847d0",
    measurementId: "G-H64RDK8BF8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase