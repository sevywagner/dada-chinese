import { createContext, useState } from "react";

let logoutTimer;

export const authContext = createContext({
    token: null,
    isLoggedIn: false,
    loginHandler: (token, expirationTime) => {},
    logoutHandler: () => {}
});

const getRemainingTime = (expirationTime) => {
    const now = new Date().getTime();
    const expiration = new Date(expirationTime).getTime();

    return expiration - now;
}

const retrieveToken = () => {
    const token = localStorage.getItem('token');
    const expirationTime = localStorage.getItem('expiration');

    const remainingTime = getRemainingTime(expirationTime);

    if (remainingTime <= 3600) {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        return null;
    }

    return {
        token,
        remainingTime
    };
}

const AuthContextProvider = ({ children }) => {
    const tokenData = retrieveToken();
    let initialToken;

    if (tokenData) {
        initialToken = tokenData.token;
    }

    const [token, setToken] = useState(initialToken);
    const [isAdmin, setIsAdmin] = useState(false);
    const isLoggedIn = token ? true : false;

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        setIsAdmin(false);
        
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }

    const loginHandler = (token, expiration, isAdmin) => {
        localStorage.setItem('token', token.toString());
        localStorage.setItem('expiration', expiration);
        setToken(token);
        setIsAdmin(isAdmin);
        const remainingTime = getRemainingTime(expiration);

        logoutTimer = setTimeout(loginHandler, remainingTime);
    }

    const contextValues = {
        token: token,
        isLoggedIn,
        loginHandler,
        logoutHandler
    }

    return (
        <authContext.Provider value={contextValues}>
            {children}
        </authContext.Provider>
    );
}

export default AuthContextProvider;