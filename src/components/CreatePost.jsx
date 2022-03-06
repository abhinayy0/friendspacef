import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { createPost } from "../api/getPosts";

function CreatePost(props) {
  const [data, setData] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    if (data != "") {
      await createPost(data);
    } else {
      alert("Enter a valid value");
    }
    setData("");
  };
  useEffect(() => {}, [data]);

  return (
    <div>
      <Container>
        <Form>
          <Row className="justify-content-md-center">
            <Col xs lg="7" className="mt-2">
              <Form.Control
                as="textarea"
                rows={3}
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <Button type="submit" className="my-1" onClick={handleClick}>
                Post
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default CreatePost;
