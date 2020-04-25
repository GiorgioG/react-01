import React, {Fragment, useContext} from "react";
import {AuthContext} from "../auth-context";
import {Redirect} from "react-router-dom";

const PrivateRoute = (props) => {
    let authContext = useContext(AuthContext);
    return (
        <Fragment>
            { authContext && authContext.authenticated ? props.children : <Redirect to='/login'/>}
        </Fragment>
    )
}

export default PrivateRoute