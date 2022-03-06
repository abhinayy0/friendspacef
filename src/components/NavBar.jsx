import React, { useContext, useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";

function NavBar(props) {
  const { user, isLoggedin, dispatch } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOG_OUT" });
  };

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/">FriendSpace</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {!isLoggedin && (
              <div>
                <Navbar.Text>
                  <Link to="/login"> Log In </Link>
                </Navbar.Text>
              </div>
            )}
            {!isLoggedin && (
              <div>
                <Navbar.Text>
                  <Link to="/signup">&nbsp;&nbsp;Signup</Link>
                </Navbar.Text>
              </div>
            )}
            {isLoggedin && (
              <div>
                <Navbar.Text>
                  {" "}
                  <Link to="/profile">{user.username}&nbsp;</Link>
                </Navbar.Text>
                <Navbar.Text>
                  <Button onClick={logout}>Log out</Button>
                </Navbar.Text>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
