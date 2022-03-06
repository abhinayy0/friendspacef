import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Follower(props) {
  const [Name, setName] = useState(props.follower.user_id);
  const unFollow = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Col xs lg="7" className="mt-2">
        <label htmlFor="myEmail">{Name}&nbsp;</label>
        <Button onClick={unFollow}>Unfollow</Button>
      </Col>
    </div>
  );
}

export default Follower;
