import React, {useContext, useReducer} from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {AuthContext} from "./auth-context";
import PrivateRoute from "./components/private-route";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import AuthReducer from "./reducers/auth-reducer";

function App() {
    const initialState = useContext(AuthContext);
    const [_, dispatch] = useReducer(AuthReducer, initialState);
    return (
        <AuthContext.Provider value={{authContext: initialState, dispatch}}>
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        AppName
                    </header>
                    <div>
                        <Route path='/login' component={LoginPage}/>
                        <PrivateRoute>
                            <Route exact path='/' component={HomePage}/>
                        </PrivateRoute>
                    </div>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
export default App;
