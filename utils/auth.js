import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  const rng = [];
  rng[0] = 'https://www.youtube.com/watch?v=sAzaIP-_3jU';
  rng[1] = 'https://www.youtube.com/watch?v=sAzaIP-_3jU';
  rng[2] = 'https://www.youtube.com/watch?v=9C_HReR_McQ';
  rng[3] = 'https://www.youtube.com/watch?v=dTAAsCNK7RA';
  rng[4] = 'https://www.youtube.com/watch?v=BxV14h0kFs0';

  firebase.auth().signOut();

  window.location.href = rng[Math.floor(Math.random() * rng.length)];
};

export { signIn, signOut };
