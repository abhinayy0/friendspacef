import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { UserContext } from "../context/Context";
import { Friends } from ".";
import { useNavigate } from "react-router-dom";

function UserInfo(props) {
  const { isLoggedin, user, inProgress, error, dispatch } =
    useContext(UserContext);

  let navigate = useNavigate();
  const followers = (e) => {
    return navigate("/followers");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <label htmlFor="myEmail">Name</label>
            <br />
            <label htmlFor="myEmail">{user.username}</label>
            <br />
            <label htmlFor="myEmail">Email</label>
            <br />
            <label htmlFor="myEmail">{user.email}</label>
            <br />
          </Col>
        </Row>

        <Row>
          <Col sm={2}>
            <Button onClick={followers}>Followers</Button>
          </Col>
          <Col>
            <Button>Following</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserInfo;
