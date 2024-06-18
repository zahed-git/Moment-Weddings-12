import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {auth} from '../Firebase/firebase.init'

export const AuthContext= createContext()

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(false)
    const axiosPublic=useAxiosPublic()
    const googleProvider= new GoogleAuthProvider()
    const gitProvider= new GithubAuthProvider()

    // -----------------------------?
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}
const gitLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,gitProvider) 

}

const updateUserProfile = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
    })
}

const logOut=()=>{
    setLoading(true)
    signOut(auth)
}
useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        if(currentUser){
            const userInfo={
                email:currentUser.email
            }
            axiosPublic.post('/jwt',userInfo)
            .then(res=>{
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                    setLoading(false)
                }
            })
        }
        else {
            localStorage.removeItem('access-token')
            setLoading(false)
        }
        
    })
    return () => {
        unSubscribe();
    }
},[axiosPublic])
    const authInfo={
        createUser,
        signInUser,
        googleLogin,
        gitLogin,
        updateUserProfile,
        logOut,
        user,
         loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;