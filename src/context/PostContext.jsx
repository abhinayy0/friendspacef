import React, { createContext, posteducer } from "react";
import { postReducer } from "./Reducer";

const INITIAL_POST_STATE = {
  posts: {},

  error: false,
};

export const PostContext = createContext(INITIAL_POST_STATE);

export const postContextProvider = ({ children }) => {
  const [state, dispatch] = posteducer(postReducer, INITIAL_STATE);
  return (
    <PostContext.Provider
      value={{
        posts: state.post,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
