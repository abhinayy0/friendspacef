export const LoginStart = (userCredential) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailed = (error) => ({
  type: "LOGIN_FAILED",
  payload: error,
});

export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE_USER = "AUTHENTICATE_USER";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_START";
export const SIGNUP_FAILED = "SIGNUP_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS ";

export const LogoutUser = () => ({
  type: "LOG_OUT",
});

export const AuthenticateUser = () => ({
  type: AUTHENTICATE_USER,
  payload: user,
});
