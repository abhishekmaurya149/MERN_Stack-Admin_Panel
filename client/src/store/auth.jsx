import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");


    let isLoggedIn = !!token;
    console.log("islogdedIn",isLoggedIn);


    const storeTokentInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    // tacking the logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // * JWT AUTHENTICATION - to get the currently loggedIN user data
// * function to check the user Authentication or not

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

            if(response.ok){
                const data = await response.json();
                console.log("user data: ", data.userData);
                // our main goal is to get the user data
                setUser(data.userData);
                
            }else{                
                console.log("Error fetching user data");            
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        userAuthentication();
    }, []);


    return (
    <AuthContext.Provider value={{isLoggedIn,storeTokentInLS, LogoutUser, user}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue =  useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}