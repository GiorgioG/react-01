import React, {useContext, useReducer} from "react";
import {AuthContext} from "../auth-context";
import {Redirect} from "react-router-dom";
import AuthReducer from "../reducers/auth-reducer";
import {LOG_IN_USER} from "../reducers/constants";


const LoginPage = (props) => {
    let authContext = useContext(AuthContext);
    let [_, dispatch] = useReducer(AuthReducer);

    function letMeIn() {
        dispatch({type: LOG_IN_USER})
    }

    return (
        authContext.authenticated === true ? <Redirect to='/'/> : (
            <div>
                <h1>Login Page!</h1>
                <button onClick={letMeIn}>Let me in!</button>
            </div>
        )
    )
}


export default LoginPage;