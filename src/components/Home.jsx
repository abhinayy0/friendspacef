import React from "react";
import { PostList, Profile, CreatePost, Post } from "./";
import { Card, Container, Row, Col } from "react-bootstrap";
function Home(props) {
  return (
    <div>
      <Container className="justify-content-md-center">
        <CreatePost />
        <PostList />
      </Container>
    </div>
  );
}

export default Home;
