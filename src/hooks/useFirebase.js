import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // observe whether user auth state changed or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) =>
      setUser(result.user)
    );
  };

  const logOut = () => {
    signOut(auth).then(() => setUser({}));
  };

  return { user, signInUsingGoogle, logOut };
};

export default useFirebase;
