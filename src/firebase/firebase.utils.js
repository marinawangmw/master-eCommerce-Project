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

// 1. Async porque es un request a un API (quiero que siga haciendo otra cosa mientras y yo vuelvo a atenderlo cuando este listo/ cuando yo termine)
// 2. userAuth --> el objeto que devuelve firebase; cuando esta loggeado devuelve muchos datos, cuando hace sign out, devuelve null
// 3. Firebase siempre devuelve dos objetos: query reference and query snapshot
// 4. query reference: lo que devuelve firebase cuando lo hago una consulta(query), la referencia al doc/collection, haciendo .doc o .collection; me permite modificar los datos (CRUD)
// 5. query snapshot: cuando hago .get: me devuelve un snapshot del objeto y mediante codigo evaluamos si contiene datos o no; tiene un parametro 'exists'; es solo un snapshot de los datos, no lo puedo modificar

// Check in the BD if the user exists, if not, create it
// será invocado (en login no, why? porque no podras loggearte si no estas previamente registrado, vas a tener que hacer log up, y ahi se crea el usuario en la bd) en state change, y en log up; signin with google es la excepcion
export const createUserProfileDocument = async (userAuth, additionalData) => {
    //if the user is signing out
    if(!userAuth) return;

    //if the user is siging in, check in the DB
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = userRef.get();

    //if the user doesn't exist in the DB, create it
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {console.log('Error creating user', err.message)}
    }

    // si no existe lo creo y lo devuelvo
    // si existe, lo devuelvo de una
    return userRef;
}

//functionalities related to authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// functionalities in order to be able to login with google (popup)
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;