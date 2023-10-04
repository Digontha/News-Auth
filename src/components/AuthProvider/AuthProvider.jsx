import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";



export const AuthContext =createContext()
const AuthProvider = ({children}) => {
 const [user,setUser]=useState(null)  
 const [loading,setLoading] = useState(true)  
 const auth = getAuth(app)

 const createUser = (email,password) =>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
 }
 
 const loginUser = (email,password,name,image) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password,name,image)
 }

 useEffect(()=>{
            
            const unSubscribe = onAuthStateChanged(auth,currentUser=>{
                setLoading(false)
                setUser(currentUser)
                console.log(currentUser);
            })
            return()=>{
                unSubscribe()
            } 
 },[])
  
 const googleProvider = new GoogleAuthProvider()
 const githubProvider = new GithubAuthProvider()

 const signInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup (auth,googleProvider)
 }
 
 const signInWithGithub = () =>{
    setLoading(true)
    return signInWithPopup (auth,githubProvider)
 }

 const logOut=()=>{
    setLoading(true)
    signOut(auth)
 }


 const authInfo = {
    createUser,
    loginUser,
    user,
    logOut,
    loading,
    signInWithGoogle,
    signInWithGithub,
 }
    return (
       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
};

export default AuthProvider;

