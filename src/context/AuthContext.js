import React,{createContext,useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [username,setUser] = useState('user');
    const [isLoading,setIsLoading] = useState(true);
    const [userToken,setUserToken] = useState(null);

    const userlogin = ()=>{
        setUserToken('randomToken');
        setIsLoading(false);
    }
    const userlogout = ()=>{
        setUserToken(null);
        setIsLoading(false);
    }
    return (
        <AuthContext.Provider value={{userlogin,userlogout,isLoading,userToken}}>
            {children}
        </AuthContext.Provider>
    )
}