import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
  window.location.href = 'https://www.youtube.com/watch?v=sAzaIP-_3jU';
};

export { signIn, signOut };
