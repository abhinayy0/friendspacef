import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/Context";

function RequireAuth({ children, redirectTo }) {
  const { isLoggedin } = useContext(UserContext);

  return isLoggedin ? children : <Navigate to={redirectTo} />;
}

export default RequireAuth;
