import * as React from "react";

export const AuthContext = React.createContext({
    authenticated: window.localStorage.getItem('auth') || false
});