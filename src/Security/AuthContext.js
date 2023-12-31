import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    return (
        <AuthContext.Provider value={{  }}>
            {children}
        </AuthContext.Provider>
    );
}