import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnN8yiImo8V6jCWBz5V5EXdkDujjI9OEo",
  authDomain: "gql-react-node-udemy.firebaseapp.com",
  // databaseURL: "https://gql-react-node-udemy.firebaseio.com",
  projectId: "gql-react-node-udemy",
  storageBucket: "gql-react-node-udemy.appspot.com",
  // messagingSenderId: "660400582483",
  appId: "1:660400582483:web:154b9c0912e81847467ba6",
  measurementId: "G-BYEN4PKHEH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
