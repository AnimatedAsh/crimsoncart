import {
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from "./types";

const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNIN_ERROR:
      console.log("signin error");
      return {
        ...state,
        authError: "Login failed.",
      };
    case SIGNIN_SUCCESS:
      console.log("sign success");
      return {
        ...state,
        authError: null,
      };
    case SIGNOUT_SUCCESS:
      console.log("signout success");
      return { state };
    case SIGNUP_SUCCESS:
      console.log("signup success");
      return {
        ...state,
        authError: null,
      };
    case SIGNUP_ERROR:
      console.log("signup error");
      return {
        ...state,
        authError: action.payload.message,
      };
    default:
      return state;
  }
};

export default authReducer;
