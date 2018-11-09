import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC505kdZQUkFN9q6xeDgqhP03toyqfIGpI",
    authDomain: "react-login-65254.firebaseapp.com",
    databaseURL: "https://react-login-65254.firebaseio.com",
    projectId: "react-login-65254",
    storageBucket: "react-login-65254.appspot.com",
    messagingSenderId: "1076515770635"
  };
 const Fire = firebase.initializeApp(config);

 export default Fire;
