import React, { useEffect, useContext, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/getUser";
function Signup(props) {
  const { isLoggedin, user, inProgress, error, dispatch } =
    useContext(UserContext);

  const emailRef = useRef();
  const passRef = useRef();
  const confirmpassRef = useRef();
  const usernameRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    let password = passRef.current.value;
    let username = usernameRef.current.value;

    if (password == confirmpassRef.current.value) {
      signup({ username, email, password }, dispatch);
    }
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (isLoggedin) {
      return navigate("/");
    }
  }, [isLoggedin]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="p-4  p-sm-3">
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Control
            type="text"
            placeholder="Enter Username"
            ref={usernameRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" ref={passRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            ref={confirmpassRef}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={inProgress}
          onClick={handleClick}
        >
          Signup
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
