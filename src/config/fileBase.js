// Initialize Firebase
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBXJsS8Lu8iNIPh9PuRIBVovgnzwmzY0rM",
    authDomain: "budget-33df2.firebaseapp.com",
    databaseURL: "https://budget-33df2.firebaseio.com",
    projectId: "budget-33df2",
    storageBucket: "budget-33df2.appspot.com",
    messagingSenderId: "623574857398"
  };
  const fireBase = firebase.initializeApp(config);
  export default fireBase;