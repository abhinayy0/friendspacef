export const PostReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        inProgress: true,
        user: { b: "abi" },
        error: false,
      };
    default:
      return state;
  }
};
