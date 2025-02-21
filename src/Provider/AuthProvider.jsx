import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';

const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        user, 
        setUser,
        loading,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;