import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function Post(props) {
  return (
    <div key={props.post.id}>
      <Row className="justify-content-md-center">
        <Col xs lg="7" className="mt-2">
          <Card>
            <Card.Header>{props.post.author}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p> {props.post.body}</p>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Post;
