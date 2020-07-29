import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDX2xAG5ImeoYMC0Mv65O3DV6j48JJ4ViE",
    authDomain: "master-ecommerce-project.firebaseapp.com",
    databaseURL: "https://master-ecommerce-project.firebaseio.com",
    projectId: "master-ecommerce-project",
    storageBucket: "master-ecommerce-project.appspot.com",
    messagingSenderId: "527277449280",
    appId: "1:527277449280:web:d16c2a4d39eea3956c3fa5",
    measurementId: "G-P6J215Q8N4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;