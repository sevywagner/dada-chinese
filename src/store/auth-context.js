import { createContext } from "react";

export const authContext = createContext({
    id: ''
});

export default AuthContextProvider = ({ children }) => {

    const contextValues = {
        id: ''
    }

    return (
        <authContext.Provider value={contextValues}>
            {children}
        </authContext.Provider>
    );
}