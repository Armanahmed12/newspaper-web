import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // LogIn through google
  const googleProvider = new GoogleAuthProvider();

  // handle Google log In
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  // handle Github log In
  const githubProvider = new GithubAuthProvider();

  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);

      // GitHub Access Token
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // Signed-in user info
      const user = result.user;

      console.log("User:", user);
      console.log("Access Token:", token);
    } catch (error) {
      console.error("Error logging in with GitHub:", error);
    }
  };

  const createUser = (email, password) => {
    //   setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    logIn,
    loading,
    setLoading,
    updateUser,
    resetPassword,
    handleGoogleLogin,
    handleGithubLogin,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
