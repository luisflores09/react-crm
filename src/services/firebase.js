import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCRSrG2s1gIvbPvSEyosKs6bVmaNjO9B7A",
    authDomain: "react-crm-20990.firebaseapp.com",
    projectId: "react-crm-20990",
    storageBucket: "react-crm-20990.appspot.com",
    messagingSenderId: "398336601122",
    appId: "1:398336601122:web:4b019ad1d16294415c2e7b"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const provider = new GoogleAuthProvider();

  function signIn () {
    return signInWithPopup(auth, provider);
  }

  function logOut () {
    return auth.signOut();
  }

export {
    auth,
    signIn,
    logOut
}