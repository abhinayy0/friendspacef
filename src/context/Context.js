import React, { createContext, useReducer } from "react";
import { UserReducer } from "./Reducer";

const INITIAL_STATE = {
  user: {},
  isLoggedin: false,
  error: false,
  inProgress: false,
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isLoggedin: state.isLoggedin,
        inProgress: state.inProgress,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
