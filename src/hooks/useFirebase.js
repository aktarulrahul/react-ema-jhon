import { useEffect, useState } from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

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
