import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from 'firebase/auth'
import app from '../Firebase/firebase.init';


export const AuthContext = createContext()

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const UserContext = ({children}) => {

    const [user, setUser] = useState('');

    const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {signUp, updateUser, signIn, signInWithGoogle, user, logOut};

    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default UserContext;