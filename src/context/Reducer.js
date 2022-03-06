export const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        inProgress: true,
        user: { b: "abi" },
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoggedin: true,
        error: null,
        inProgress: false,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case "AUTHENTICATE_USER":
      return {
        ...state,
        user: action.payload,
        isLoggedin: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {},
        isLoggedin: false,
      };
    default:
      return state;
  }
};
