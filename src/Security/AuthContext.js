import { createContext, useContext, useState } from "react";


const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthentacted, setIsAuthentacted] = useState(false);
    const [userName, setUserName] = useState(null);

     function login(userName, password) {
         if (userName === 'Islam Gad' && password === '123') {
             setIsAuthentacted(true);
             setUserName(userName)
             return true;
         } else {
             setIsAuthentacted(false);
             setUserName(null)
             return false;
         }
     }

     return (
        <AuthContext.Provider value={{ isAuthentacted , setIsAuthentacted }}>
            {children}
        </AuthContext.Provider>
    );
}