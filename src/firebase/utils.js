import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDutTigCG75anVmxIfCvJCb4G-U5OWh5uU",
    authDomain: "redux-ecommerce-movie.firebaseapp.com",
    projectId: "redux-ecommerce-movie",
    storageBucket: "redux-ecommerce-movie.appspot.com",
    messagingSenderId: "883542075191",
    appId: "1:883542075191:web:bb8d76f2aba2a1adb25cb2",
    measurementId: "G-WWHBJ4XTLF"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
