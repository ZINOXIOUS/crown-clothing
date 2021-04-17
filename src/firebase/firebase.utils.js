import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAYyiu4O1piEYPXtz27eM1e6zjxMx6FY-s",
    authDomain: "crwn-db-e62ed.firebaseapp.com",
    projectId: "crwn-db-e62ed",
    storageBucket: "crwn-db-e62ed.appspot.com",
    messagingSenderId: "1066092107233",
    appId: "1:1066092107233:web:0a393989cd99076762eea0",
    measurementId: "G-HNDV1BSFLW"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

