import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC-xDnYzJBHXl0-RkgarrgBHRT9TLluQWg",
  authDomain: "fb-react-85db9.firebaseapp.com",
  projectId: "fb-react-85db9",
  storageBucket: "fb-react-85db9.appspot.com",
  messagingSenderId: "228976051883",
  appId: "1:228976051883:web:cc82f5f32d8180112b59ee"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();