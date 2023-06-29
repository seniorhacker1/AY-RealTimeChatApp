import { createContext, useContext, useState,useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";


const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, SetCurrentuser] = useState(null);
  const [Loading,SetLoading]=useState(true);
  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  // Log out function 
  const Logout=(()=>signOut(auth));


  
  const value = { currentUser, SetCurrentuser, signinWithGoogle,Logout };
  //Set Current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
     
      
        SetCurrentuser(user);
        SetLoading(false);
    
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{!Loading && children}</AuthContext.Provider>;
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
