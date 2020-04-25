import {LOG_OUT_USER, LOG_IN_USER} from "./constants";
const initialState = {
    authenticated: window.localStorage.getItem('auth') || false
};
const AuthReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {

        case LOG_IN_USER:
            return {...state, authenticated: true}
        case LOG_OUT_USER:
            return {...state, authenticated: false}
        default:
            return state;
    }
};
export default AuthReducer;