import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup()
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