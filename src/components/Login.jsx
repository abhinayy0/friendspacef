import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { login } from "../api/getUser";
import { UserContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const { isLoggedin, user, inProgress, error, dispatch } =
    useContext(UserContext);

  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    if (isLoggedin) {
      return navigate("/");
    }
  }, [isLoggedin]);

  const handleClick = (e) => {
    e.preventDefault();
    let password = pass;
    login({ email, password }, dispatch);

    setEmail("");
    setPass("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="p-4  p-sm-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={inProgress}
          onClick={handleClick}
        >
          {inProgress ? "Logging in ..." : "Log In"}
        </Button>
      </Form>
    </div>
  );
}

export default Login;
