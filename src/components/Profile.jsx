import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { UserContext } from "../context/Context";
import { Friends, UserInfo } from ".";

function Profile(props) {
  const { isLoggedin, user, inProgress, error, dispatch } =
    useContext(UserContext);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="7" className="mt-2">
          <UserInfo />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
