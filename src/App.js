import React, { useEffect, useContext } from "react";
import NavBar from "./components/NavBar";
import {
  Home,
  Page404,
  Login,
  Signup,
  RequireAuth,
  Profile,
  Friends,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/Context";
import jwt_decode from "jwt-decode";

const App = () => {
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    // Update the document title using the browser API
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);

      dispatch({ type: "AUTHENTICATE_USER", payload: user });
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <RequireAuth redirectTo="/login">
                <Home />
              </RequireAuth>
            }
          />

          <Route
            path="/followers"
            element={
              <RequireAuth redirectTo="/login">
                <Friends />
              </RequireAuth>
            }
          />

          <Route
            path="/profile"
            element={
              <RequireAuth redirectTo="/login">
                <Profile />
              </RequireAuth>
            }
          />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
