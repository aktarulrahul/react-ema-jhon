import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  getIdToken,
} from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // observe whether user auth state changed or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user).then((idToken) =>
          localStorage.setItem('idToken', idToken)
        );
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, []);

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth).then(() => setUser({}));
  };

  return { user, signInUsingGoogle, logOut };
};

export default useFirebase;
