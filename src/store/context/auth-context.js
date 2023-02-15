import { createContext, useState } from "react";

let logoutTimer;

export const authContext = createContext({
    token: null,
    isLoggedIn: false,
    loginHandler: (token, expirationTime) => {},
    logoutHandler: () => {},
    getTokenValidity: () => {}
});

const getRemainingTime = (expirationTime) => {
    const now = new Date().getTime();

    return expirationTime - now;
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
    const isLoggedIn = token ? true : false;

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }

    const loginHandler = (token, expiration, isAdmin) => {
        localStorage.setItem('token', token.toString());
        localStorage.setItem('expiration', expiration);
        setToken(token);
        const remainingTime = getRemainingTime(expiration);

        logoutTimer = setTimeout(logoutHandler, remainingTime);
    }

    const getTokenValidity = () => {
        const expiration = tokenData.remainingTime;

        const remainingTime = getRemainingTime(localStorage.getItem('expiration'));

        if (remainingTime > 3600) {
            return true;
        } else {
            return false;
        }
    }

    const contextValues = {
        token: token,
        isLoggedIn,
        loginHandler,
        logoutHandler,
        getTokenValidity
    }

    return (
        <authContext.Provider value={contextValues}>
            {children}
        </authContext.Provider>
    );
}

export default AuthContextProvider;